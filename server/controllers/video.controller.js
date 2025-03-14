import video from "../models/video.model.js";


// function for adding video to the database 
export const uploadVideo = async (req, res) => {
  try {
    const { title, description, videoLink, category, thumbnail } = req.body;

    const videoUpload = new video({
      user: req.user._id,
      title,
      description,
      videoLink,
      category,
      thumbnail,
    });
    await videoUpload.save();

    res.status(201).json({ sucess: "true", videoUpload });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


// function for fetching all videos from database 
export const getAllVideo = async (req, res) => {
  try {
    const videos = await video
      .find()
      .populate("user", "channelName profilePic userName createdAt");
    res.status(201).json({ sucess: "true", videos: videos });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// function for getting video by id
export const getVideoById = async (req, res) => {
  try {
    let { id } = req.params;
    const getVideo = await video
      .findById(id)
      .populate("user", "channelName profilePic userName createdAt");

    res.status(201).json({ sucess: "true", video: getVideo });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


// function for fetching all videos uploaded by a perticular user 
export const getAllVideoByUserID = async (req, res) => {
  try {
    let { userId } = req.params;
    const videos = await video
      .find({ user: userId })
      .populate("user", "channelName profilePic userName createdAt about");
    res.status(201).json({ sucess: "true", video: videos });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
