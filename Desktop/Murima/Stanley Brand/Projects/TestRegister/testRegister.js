// Test registration endpoint (for frontend testing)
async function testRegister(req, res) {
  try {
    const { email, password, name } = req.body;
    
    if (!email || !password || !name) {
      return res.status(400).json({
        success: false,
        message: 'Email, password, and name are required'
      });
    }

    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      displayName: name
    });

    res.status(201).json({
      success: true,
      message: 'Test user created successfully',
      user: {
        uid: userRecord.uid,
        email: email,
        name: name
      }
    });
    
  } catch (error) {
    console.error('💥 Test registration failed:', error);
    res.status(500).json({
      success: false,
      message: 'Test registration failed',
      error: error.message
    });
  }
}
