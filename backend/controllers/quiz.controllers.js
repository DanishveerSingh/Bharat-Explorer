import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";

const saveQuizScore = asyncHandler(async (req, res) => {
  const username = req.user.username.toLowerCase();
  const { score } = req.body;
  if (!username || typeof score !== "number") {
    throw new ApiError(400, "Username and valid score are required");
  }
  const user = await User.findOne({ username });
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  user.quizScore = score;
  await user.save({ validateBeforeSave: false });
  return res
    .status(200)
    .json(
      new ApiResponse(200, { username, score }, "Quiz score saved successfully")
    );
});

const getQuizScore = asyncHandler(async (req, res) => {
  const username = req.params.username?.toLowerCase();
  if (!username) {
    throw new ApiError(400, "Username is required");
  }
  const user = await User.findOne({ username });
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
