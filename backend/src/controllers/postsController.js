const { fetchData } = require("../services/apiService");

const getPosts = async (req, res) => {
    try {
        const type = req.query.type;
        if (!type || !["popular", "latest"].includes(type)) {
            return res.status(400).json({ error: "Invalid type parameter" });
        }

        const users = await fetchData("/users");
        let allPosts = [];

        await Promise.all(
            Object.keys(users).map(async (userId) => {
                const userPosts = await fetchData(`/users/${userId}/posts`);
                allPosts = [...allPosts, ...userPosts.posts];
            })
        );

        if (type === "latest") {
            allPosts.sort((a, b) => b.id - a.id);
            return res.json(allPosts.slice(0, 5));
        }

        // Get comment counts for each post
        const postCommentCounts = {};
        await Promise.all(
            allPosts.map(async (post) => {
                const comments = await fetchData(`/posts/${post.id}/comments`);
                postCommentCounts[post.id] = comments.comments.length;
            })
        );

        const maxComments = Math.max(...Object.values(postCommentCounts));
        const mostPopularPosts = allPosts.filter(
            (post) => postCommentCounts[post.id] === maxComments
        );

        res.json(mostPopularPosts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getPosts };
