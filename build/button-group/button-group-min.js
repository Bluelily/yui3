YUI.add("button-group",function(b){var a=function(d){var c={buttons:{setter:function(g){var e=new b.ArrayList(g);var f=this.get("type");e.each(function(h){if(f==="radio"||f==="checkbox"){h.set("type","toggle");}h.before("selectedChange",this._beforeButtonSelectedChange,this);h.after("selectedChange",this._afterButtonSelectedChange,this);},this);return e;}},selection:{value:[],getter:function(){var f=this.get("buttons");var e=[];f.each(function(g){if(g.get("selected")){e.push(g);}});return e;}},type:{value:"push",validator:function(e){return b.Array.indexOf(["push","radio","checkbox"],e);}},};this.addAttrs(c,d);};a.prototype._beforeButtonSelectedChange=function(g){var d,f;d=g.target;if(this.get("type")==="radio"){var c=d.get("selected");if(c){g.preventDefault();return false;}else{}}};a.prototype._onButtonSelectedChange=function(c){};a.prototype._afterButtonSelectedChange=function(g){var c,d,f;f=g.target;if(this.get("type")==="radio"){d=this.get("buttons");d.each(function(e){if(d.indexOf(f)!=d.indexOf(e)){e.set("selected",false,{propagate:false});}else{}});}};b.augment(a,b.Attribute);b.ButtonGroup=a;},"@VERSION@",{requires:["button-base"]});