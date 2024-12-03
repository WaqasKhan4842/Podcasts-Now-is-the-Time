import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Signup Controller
export const registerUser = async (req, res) => {
    console.log("I am here");
    try {
        const { fullname, username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed password:', hashedPassword);

        // Create new user
        const newUser = new User({ fullname, username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login Controller
export const loginUser = async (req, res) => {
    console.log(req.body); // Log incoming data for debugging
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Log both plain-text password and the stored hashed password
        console.log('Entered password:', password);
        console.log('Stored hashed password:', user.password);

        // Compare plain-text password with stored hash
        const isMatch = await bcrypt.compare(password, user.password);

        console.log('Password match:', isMatch); // Log comparison result

        // If the password doesn't match, return an error
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        // Respond with the token and user details
        res.status(200).json({
            token,
            user: {
                fullname: user.fullname,
                username: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
