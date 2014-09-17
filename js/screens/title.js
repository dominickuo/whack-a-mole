game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {
	  // Hide the corgi
    var corgi = document.getElementById('corgi');
    corgi.hidden = true;
    corgi.style.opacity = 0;
	  // The rect of the screen region.
	  var screenWidth = me.video.renderer.getWidth();
	  var screenHeight = me.video.renderer.getHeight();
	  this.rect = new me.Rect(0, 0, screenWidth, screenHeight);

	  me.input.registerPointerEvent('pointerdown', this.rect, this.onMouseDown.bind(this));
	  
	  this.display();
	  this.showBanner();
	},
	
	onMouseDown: function() {
	  me.input.releasePointerEvent('pointerdown', this.rect);
	  me.state.change(me.state.READY);
	},

  display: function() {
    var x = me.video.renderer.getWidth()/2;
    var y = me.video.renderer.getHeight()/2;
    me.game.world.addChild(new game.Utilities.ShowText("WHACK A MOODY", "left", x, y));
    me.game.world.addChild(new game.Utilities.ShowText("TAP TO PLAY", "left", x, y + 48));
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
