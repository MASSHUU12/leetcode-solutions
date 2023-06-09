function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const n1 = nums1.length;
  const n2 = nums2.length;
  const totalLength = n1 + n2;
  const halfLength = Math.floor(totalLength >> 1);

  if (n1 > n2) return findMedianSortedArrays(nums2, nums1); // Swap arrays and try again

  let start = 0;
  let end = n1;

  while (start <= end) {
    const partition1 = start + Math.floor((end - start) >> 1);
    const partition2 = halfLength - partition1;

    const maxLeft1 = partition1 > 0 ? nums1[partition1 - 1] : -Infinity;
    const minRight1 = partition1 < n1 ? nums1[partition1] : Infinity;
    const maxLeft2 = partition2 > 0 ? nums2[partition2 - 1] : -Infinity;
    const minRight2 = partition2 < n2 ? nums2[partition2] : Infinity;

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1)
      if (totalLength % 2 === 0)
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      else return Math.min(minRight1, minRight2);
    else if (maxLeft1 > minRight2) end = partition1 - 1;
    else start = partition1 + 1;
  }

  throw new Error("Input arrays are not sorted.");
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
