function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function (b) {
    return new Vector(this.x + b.x, this.y + b.y);
};
Vector.prototype.minus = function (b) {
    return new Vector(this.x - b.x, this.y - b.y);
};

Vector.prototype.__defineGetter__("length", function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
});


Object.defineProperty(Vector.prototype, "norm", {get: function () {
    return Math.sqrt(this.x*this.x + this.y*this.y);
}});

function StretchCell(inner, width, height) {
    this.inner = inner;
    var text = this.inner.text;
    if (text.length < height) {
        while (height - text.length > 0) {
            text = text.concat([""]);
            --height;
        }
    }
    this.inner.text = text.map(function (line) {
        if (line.length < width) {
            return line.concat(repeat(" ", width - line.length));
        } else {
            return line;
        }
    });
}

StretchCell.prototype.minHeight = function () {
    return this.inner.minHeight();
};
StretchCell.prototype.minWidth = function () {
    return this.inner.minWidth();
};
StretchCell.prototype.draw = function (w, h) {
    return this.inner.draw(w, h);
};

function ArraySeq(a) {
    this.container = a;
}
ArraySeq.prototype.begin = function () {
    this.curr_idx = 0;
    return this.curr_idx;
};
ArraySeq.prototype.end = function () {
    return this.container.length;
};
ArraySeq.prototype.next = function () {
    ++this.curr_idx
    return this.curr_idx;
};
ArraySeq.prototype.valueAt = function (iterator) {
    return iterator < this.container.length ? this.container[iterator] : undefined;
};


function RangeSeq(from, to) {
    this.container = [];
    for(var i=from; i<=to; ++i) {
        this.container.push(i);
    }
}
RangeSeq.prototype = Object.create(ArraySeq.prototype);


function logFive(seq) {
    var c = 0;
    for(var i=seq.begin(); i!=seq.end() && c<5; i=seq.next(), ++c) {
        console.log(seq.valueAt(i));
    }
}

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
