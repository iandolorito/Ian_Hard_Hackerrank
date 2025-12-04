function maximumSum(a, m) {
    var prefix = 0;
    var maxSum = 0;

    var arr = [];

    for (var i = 0; i < a.length; i++) {
        prefix = (prefix + a[i] % m) % m;
        maxSum = Math.max(maxSum, prefix);

        var left = 0;
        var right = arr.length - 1;
        var pos = arr.length;

        while (left <= right) {
            var mid = Math.floor((left + right) / 2);
            if (arr[mid] > prefix) {
                pos = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if (pos < arr.length) {
            var candidate = (prefix - arr[pos] + m) % m;
            if (candidate > maxSum) maxSum = candidate;
        }

        arr.splice(pos, 0, prefix);
    }

    return maxSum;
}
