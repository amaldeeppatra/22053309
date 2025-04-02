const { fetchData } = require("../services/apiService");

const getTopUsers = async (req, res) => {
    try {
        const users = await fetchData("/users");
        const userPostCounts = {};

        await Promise.all(
            Object.keys(users).map(async (userId) => {
                const posts = await fetchData(`/users/${userId}/posts`);
                userPostCounts[userId] = posts.posts.length;
            })
        );

        const topUsers = Object.entries(userPostCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([userId, postCount]) => ({
                id: userId,
                name: users[userId],
                postCount,
            }));

        res.json(topUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getTopUsers };