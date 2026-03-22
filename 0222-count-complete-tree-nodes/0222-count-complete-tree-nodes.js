var countNodes = function(root) {
    if (!root) return 0;

    const h = getHeight(root);

    let left = 0;
    let right = (1 << h) - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (exists(mid, h, root)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return (1 << h) - 1 + left;
};

// Step 1: Get height (left-most path)
function getHeight(root) {
    let h = 0;
    while (root.left) {
        h++;
        root = root.left;
    }
    return h;
}

// Step 2: Check if node exists at index
function exists(index, h, root) {
    let left = 0;
    let right = (1 << h) - 1;

    for (let i = 0; i < h; i++) {
        let mid = Math.floor((left + right) / 2);

        if (index <= mid) {
            root = root.left;
            right = mid;
        } else {
            root = root.right;
            left = mid + 1;
        }
    }

    return root !== null;
}