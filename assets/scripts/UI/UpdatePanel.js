module.exports = cc.Class({
    extends: cc.Component,

    properties: {
        info: cc.Label,
        fileProgress: cc.ProgressBar,
        byteProgress: cc.ProgressBar,
        close: cc.Node,
        checkBtn: cc.Node,
        retryBtn: cc.Node,
        updateBtn: cc.Node
    },
    
    onLoad () {
        this.close.on(cc.Node.EventType.TOUCH_END, function () {
            this.node.parent.active = false;
        }, this);
    }
});
