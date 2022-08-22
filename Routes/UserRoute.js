


import Express from "express";
import { deleteUser, followUser, getAllUser, getUser, UnFollowUser, updateUser } from "../controllers/UserController";
import authMiddleWare from "../MiddleWare/authMiddleWare";
const router = Express.Router();

router.get("/", async (req, res) => {
    res.send("user route")
})
router.get("/", getAllUser)
router.get("/:id", getUser)
router.put("/:id", authMiddleWare,updateUser)
router.delete("/:id", authMiddleWare, deleteUser)
router.put("/:id/follow", authMiddleWare, followUser)
router.put("/:id/unfollow", authMiddleWare, UnFollowUser)
router.put('/:id', authMiddleWare, updateUser)

export default router;