/* ************************************************************************
   Copyright: 2011 OETIKER+PARTNER AG
   License:   GPLv3 or later
   Authors:   Tobi Oetiker <tobi@oetiker.ch>
   Utf8Check: äöü
************************************************************************ */

/*
#asset(ep/view-fullscreen.png)
*/

/**
 * Visualization widgets they are re-usable by calling .setArgs(args)
**/
qx.Class.define("ep.visualizer.AbstractVisualizer", {
    extend : qx.ui.tabview.Page,
    type : 'abstract',

    construct : function(title) {
        this.base(arguments, this['tr'](title));

        var breakOutButton = this._breakOutButton = new qx.ui.basic.Atom().set({
            icon   : 'ep/view-fullscreen.png',
            show   : 'icon',
            cursor : 'pointer'
        });

        breakOutButton.exclude();
        var button = this.getChildControl('button');

        button._add(breakOutButton, {
            row    : 0,
            column : 5
        });

        breakOutButton.addListener("click", this._onBreakOutButtonClick, this);
        button.addListener('syncAppearance', this._updateBreakOutButton, this);
    },

    statics : { KEY : 'name' },

    events : {
        /**
             * Fired by {@link qx.ui.tabview.Page} if the breakout button is clicked.
             *
             * Event data: The Page.
             */
        breakout : "qx.event.type.Data"
    },

    properties : {
        args : {
            nullable : true,
            init     : null,
            apply    : '_applyArgs'
        }
    },

    members : {
        _breakOutButton : null,


        /**
         * TODOC
         *
         * @param newArgs {var} TODOC
         * @param oldArgs {var} TODOC
         * @return {void} 
         */
        _applyArgs : function(newArgs, oldArgs) {
            this.error('overwrite _applyArgs in the child object');
        },


        /**
         * TODOC
         *
         * @param e {Event} TODOC
         * @return {void} 
         */
        _onBreakOutButtonClick : function(e) {
            this.fireDataEvent("breakout", this);
            e.stop();
        },


        /**
         * TODOC
         *
         * @return {void} 
         */
        _updateBreakOutButton : function() {
            var button = this.getChildControl('button');

            if (button.hasState('checked')) {
                this._breakOutButton.show();
            } else {
                this._breakOutButton.exclude();
            }
        }
    }
});