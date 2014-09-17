game.EndScreen = me.ScreenObject.extend({
  /** 
   *  action to perform on state change
   */
  onResetEvent: function() {
    // The rect of the screen region.
    var screenWidth = me.video.renderer.getWidth();
    var screenHeight = me.video.renderer.getHeight();
    this.rect = new me.Rect(0, 0, screenWidth, screenHeight);

    me.input.registerPointerEvent('pointerdown', this.rect, this.onMouseDown.bind(this));
    
    this.display();
  },
  
  onMouseDown: function() {
    me.input.releasePointerEvent('pointerdown', this.rect);
    me.state.change(me.state.MENU);
  },

  display: function() {
    var x = me.video.renderer.getWidth()/2;
    var y = me.video.renderer.getHeight()/6.4;
    me.game.world.addChild(new game.Utilities.ShowText("- HAPPY BIRTHDAY CAROL -", "center", x, y));
    me.game.world.addChild(new game.Utilities.ShowText("SEPTEMBER 6TH 2014", "center", x, y + 512));
  },

  /** 
   *  action to perform when leaving this screen (state change)
   */
  onDestroyEvent: function() {
    
  }
});
