/* ************************************************************************
   Copyright: 2011 OETIKER+PARTNER AG
   License:   GPLv3 or later
   Authors:   Tobi Oetiker <tobi@oetiker.ch>
   Utf8Check: äöü
************************************************************************ */

/**
 * A simple iFrame. Loads the src property of the args map
**/
qx.Class.define("ep.visualizer.IFrame", {
    extend : ep.visualizer.AbstractVisualizer,

    construct : function(title, args) {
        this.base(arguments, title);
        this.set({ layout : new qx.ui.layout.Grow() });
        this.__iFrame = new qx.ui.embed.ThemedIframe();
        this.add(this.__iFrame);
        this.setArgs(args);
    },

    statics : { KEY : 'iframe' },

    members : {
        __iFrame : null,


        /**
         * TODOC
         *
         * @param newArgs {var} TODOC
         * @param oldArgs {var} TODOC
         * @return {void} 
         */
        _applyArgs : function(newArgs, oldArgs) {
            this.__iFrame.setSource(newArgs.src);
        }
    }
});