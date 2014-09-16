game.Utilities = {};

game.Utilities.ShowText = me.Renderable.extend( {  
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
