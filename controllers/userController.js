const axios=require('axios');
exports.getRandomUser = async (req, res) => {
    const response =await axios.get('https://randomuser.me/api/');
    res.json({
        success:true,
        data:response.data.results[0]
    });
};