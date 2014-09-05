game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {
	  me.game.reset();

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
	  me.state.change(me.state.PLAY);
	},

  display: function() {
    var x = me.video.renderer.getWidth()/2;
    var y = me.video.renderer.getHeight()/2;
    me.game.world.addChild(new game.TitleScreen.ShowText("WHACK A MOODY", "left", x, y));
    me.game.world.addChild(new game.TitleScreen.ShowText("TAP TO PLAY", "left", x, y + 48));
    me.game.world.addChild(new game.TitleScreen.ShowText("SEPTEMBER 6TH 2014", "center", x, y + 256));
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

game.TitleScreen.ShowText = me.Renderable.extend( {  
  /** 
   * constructor
   */
  init: function(text, align, x, y) {
    
    // call the super constructor 
    // (size does not matter here)
    this._super(me.Renderable, 'init', [x, y, 10, 10]); 
    
    // create a font
    this.font = new me.BitmapFont("atascii", {x:24});
    this.font.alignText = "bottom";
    this.font.set(align, 1.2);

    this.text = text;

    // make sure we use screen coordinates
    this.floating = true;
  },

  /**
   * draw the score
   */
  draw : function (context) {
    this.font.draw (context, this.text, this.pos.x, this.pos.y);
  }

});
