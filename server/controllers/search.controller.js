import video from "../models/video.model.js";

// seaching video in database 
export const searchVideo = async (req, res) => {
  const searchQuery = req.query.q;
  try {
    const videos = await video
      .find({
        $or: [
          { title: { $regex: searchQuery, $options: "i" } },
          { category: { $regex: searchQuery, $options: "i" } },
        ],
      })
      .populate("user", "channelName profilePic userName createdAt");
    res.json({ videos });
  } catch (error) {
    res.status(500).json({ message: "Error searching videos", error });
  }
};
