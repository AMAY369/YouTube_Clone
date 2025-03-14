import comment from "../models/comment.model.js";

// function for adding comments 
export const addComment = async (req, res) => {
  try {
    let { video, message } = req.body;
    const newComment = new comment({ user: req.user._id, video, message });
    await newComment.save();

    res.status(201).json({ message: "success", comment: newComment });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


// function for getting comments by videoId 
export const getCommentByVideoId = async (req, res) => {
  try {
    let { videoId } = req.params;
    const getComment = await comment
      .find({ video: videoId })
      .populate("user", "channelName profilePic userName createdAt about");

    res.status(201).json({ message: "success", comment: getComment });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
