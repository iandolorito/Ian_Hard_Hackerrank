function matrixRotation(matrix, r) {
    var m = matrix.length;
    var n = matrix[0].length;
    var layers = Math.min(m, n) / 2;

    for (var layer = 0; layer < layers; layer++) {
        var elements = [];

        var top = layer;
        var left = layer;
        var bottom = m - 1 - layer;
        var right = n - 1 - layer;

        for (var i = left; i <= right; i++) {
            elements.push(matrix[top][i]);
        }
        for (var i = top + 1; i <= bottom; i++) {
            elements.push(matrix[i][right]);
        }
        for (var i = right - 1; i >= left; i--) {
            elements.push(matrix[bottom][i]);
        }
        for (var i = bottom - 1; i > top; i--) {
            elements.push(matrix[i][left]);
        }

        var len = elements.length;
        var rot = r % len;
        var rotated = elements.slice(rot).concat(elements.slice(0, rot));

        var idx = 0;

        for (var i = left; i <= right; i++) {
            matrix[top][i] = rotated[idx++];
        }
        for (var i = top + 1; i <= bottom; i++) {
            matrix[i][right] = rotated[idx++];
        }
        for (var i = right - 1; i >= left; i--) {
            matrix[bottom][i] = rotated[idx++];
        }
        for (var i = bottom - 1; i > top; i--) {
            matrix[i][left] = rotated[idx++];
        }
    }

    for (var i = 0; i < m; i++) {
        console.log(matrix[i].join(" "));
    }
}
