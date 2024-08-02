const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const auth = require('../MiddleWare/authMiddleware');
const upload = require('../MiddleWare/upload');
const cors = require('cors');

router.use(cors());

// Update user profile with image upload
router.put('/profile', auth, upload.single('photo'), async (req, res) => {
    const {
        firstName,
        lastName,
        mobileNumber,
        linkedinUrl,
        instagramUrl,
        xUrl,
        gender,
        bio,
        companyOrCollege,
        birthDate
    } = req.body;
    const avatar = req.file ? req.file.path : undefined;

    try {
        const updatedFields = {
            firstName,
            lastName,
            mobileNumber,
            linkedinId: linkedinUrl,       // Map linkedinUrl to linkedinId
            instagramId: instagramUrl,     // Map instagramUrl to instagramId
            xId: xUrl,                     // Map xUrl to xId
            gender,
            bio,
            companyOrCollege,
            birthDate
        };

        if (avatar) {
            updatedFields.avatar = avatar;
        }

        const user = await User.findByIdAndUpdate(
            req.user.id,
            updatedFields,
            { new: true }
        );

        console.log('User profile updated:', user);
        res.json(user);
    } catch (err) {
        console.error('Error updating profile:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get user profile
router.get('/profile1', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('User profile:', req.user.id);
        res.json(user);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
