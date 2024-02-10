import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
	const token = req.cookies.jwt

	if (!token) return res.status(401).json({ error: 'Unauthorized Access! - No Token Provided' })

	jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
		if (err) return res.status(401).json({ error: 'Unauthorized Access! - Invalid Token' })
		req.user = user
		next()
	})
}