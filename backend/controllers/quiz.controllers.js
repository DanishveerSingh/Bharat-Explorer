import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";

const saveQuizScore = asyncHandler(async (req, res) => {
  const { username, score } = req.body;
  if (!username || typeof score !== "number") {
    throw new ApiError(400, "Username and valid score are required");
  }
  const user = await User.findOne({ username: username.toLowerCase() });
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  user.quizScore = score;
  await User.save({ validateBeforeSave: false });
  return res
    .status(200)
    .json(
      new ApiResponse(200, { username, score }, "Quiz score saved successfully")
    );
});

const getQuizScore = asyncHandler(async (req, res) => {
  const { username } = req.body;
  if (!username) {
    throw new ApiError(400, "Username is required");
  }
  const user = await User.findOne({ username: username.toLowerCase() });
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  const score = user.quizScore || 0;
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { username, score },
        "Quiz score retrieved successfully"
      )
    );
});

export { saveQuizScore, getQuizScore };
