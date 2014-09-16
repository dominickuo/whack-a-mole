game.ReadyScreen = me.ScreenObject.extend({
  /** 
   *  action to perform on state change
   */
  onResetEvent: function() {
    // Hide the corgi
    document.getElementById('corgi').hidden = true;
    // The rect of the screen region.
    var screenWidth = me.video.renderer.getWidth();
    var screenHeight = me.video.renderer.getHeight();
    this.rect = new me.Rect(0, 0, screenWidth, screenHeight);

    me.input.registerPointerEvent('pointerdown', this.rect, this.onMouseDown.bind(this));
    
    this.display();
    // this.showBanner();
  },
  
  onMouseDown: function() {
    me.input.releasePointerEvent('pointerdown', this.rect);
    me.state.change(me.state.PLAY);
  },

  display: function() {
    var x = me.video.renderer.getWidth()/2;
    var y = me.video.renderer.getHeight()/2;
    me.game.world.addChild(new game.Utilities.ShowText("GET 1000 POINTS TO GET YOUR GIFT", "center", x, y + 128));
    me.game.world.addChild(new game.Utilities.ShowText("READY?", "center", x, y + 256));
  },

  showBanner: function() {
    var spritewidth = spriteheight = 180;
    var x = me.video.renderer.getWidth()/5;
    var y = (me.video.renderer.getHeight() - spriteheight)/2;
    var image = me.loader.getImage("friends");

    var banner = new me.Sprite(x, y, image, spritewidth, spriteheight);
    banner.resize(2, 2);
    me.game.world.addChild(banner, 0, 0);
  },

  /** 
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent: function() {
    
  }
});
