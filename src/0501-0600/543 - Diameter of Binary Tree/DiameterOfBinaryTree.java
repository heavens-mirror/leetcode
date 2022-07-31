import definitions.TreeNode;

public class DiameterOfBinaryTree {
    // Approach 1
    public static int diameterOfBinaryTree(TreeNode root) {
        if (root == null)
            return 0;
        int dia1 = diameterOfBinaryTree(root.left);
        int dia2 = diameterOfBinaryTree(root.right);
        int dia3 = MaximumDepthOfBinaryTree.maxDepth(root.left) + MaximumDepthOfBinaryTree.maxDepth(root.right) + 1;
        return Math.max(Math.max(dia1, dia2), dia3);
    }

    // Approach 2
    int diameter = 0;

    public int diameterOfBinaryTree2(TreeNode root) {
        getDiameter(root);
        return diameter - 1;
    }

    private int getDiameter(TreeNode root) {
        if (root == null)
            return 0;
        int leftHeight = getDiameter(root.left);
        int rightHeight = getDiameter(root.right);
        diameter = Math.max(diameter, leftHeight + rightHeight + 1);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

class MaximumDepthOfBinaryTree {

    public static int maxDepth(TreeNode root) {
        if (root == null)
            return 0;
        int depth = Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
        return depth;
    }
}