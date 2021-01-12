var merge = function(nums1, m, nums2, n) {
    let x = 0;
    let y = 0;
    if (!n) {
        return nums1;
    }
    if (!m) {
        nums1.splice(0, n, ...nums2);
        return nums1;
    }
    nums1.splice(m, n);
    for(let i = 0; i < m+n; i++) {
        if (nums1[x] <= nums2[y]) {

        } else {
            nums1.splice(i, 0, nums2[y]);
            y++;
        }
        x++;
        if (y === n) {
            return nums1;
        }
    }
};