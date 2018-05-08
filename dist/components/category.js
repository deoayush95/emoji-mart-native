'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=require('../polyfills/extends');var _extends3=_interopRequireDefault(_extends2);var _objectGetPrototypeOf=require('../polyfills/objectGetPrototypeOf');var _objectGetPrototypeOf2=_interopRequireDefault(_objectGetPrototypeOf);var _classCallCheck2=require('babel-runtime/helpers/classCallCheck');var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=require('../polyfills/createClass');var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=require('../polyfills/possibleConstructorReturn');var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=require('../polyfills/inherits');var _inherits3=_interopRequireDefault(_inherits2);var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _frequently=require('../utils/frequently');var _frequently2=_interopRequireDefault(_frequently);var _utils=require('../utils');var _=require('.');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles=_reactNative.StyleSheet.create({category:{flexDirection:'column',alignItems:'center',justifyContent:'flex-start',marginTop:10},label:{paddingLeft:2,paddingRight:2,alignSelf:'flex-start'},labelText:{fontSize:15,fontWeight:'bold'},emojisContainer:{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',padding:2},notFound:{flexDirection:'column',alignItems:'center',justifyContent:'center'}});var Category=function(_React$Component){(0,_inherits3.default)(Category,_React$Component);function Category(props){(0,_classCallCheck3.default)(this,Category);var _this=(0,_possibleConstructorReturn3.default)(this,(Category.__proto__||(0,_objectGetPrototypeOf2.default)(Category)).call(this,props));_initialiseProps.call(_this);_this.data=props.data;_this.setContainerRef=_this.setContainerRef.bind(_this);_this.setLabelRef=_this.setLabelRef.bind(_this);_this.state={visible:true};return _this;}(0,_createClass3.default)(Category,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps,nextState){var _props=this.props;var name=_props.name;var perLine=_props.perLine;var native=_props.native;var hasStickyPosition=_props.hasStickyPosition;var emojis=_props.emojis;var emojiProps=_props.emojiProps;var skin=emojiProps.skin;var size=emojiProps.size;var set=emojiProps.set;var nextPerLine=nextProps.perLine;var nextNative=nextProps.native;var nextHasStickyPosition=nextProps.hasStickyPosition;var nextEmojis=nextProps.emojis;var nextEmojiProps=nextProps.emojiProps;var nextSkin=nextEmojiProps.skin;var nextSize=nextEmojiProps.size;var nextSet=nextEmojiProps.set;var shouldUpdate=false;if(name=='Recent'&&perLine!=nextPerLine){shouldUpdate=true;}if(name=='Search'){shouldUpdate=!(emojis==nextEmojis);}if(skin!=nextSkin||size!=nextSize||native!=nextNative||set!=nextSet||hasStickyPosition!=nextHasStickyPosition){shouldUpdate=true;}return shouldUpdate;}},{key:'getEmojis',value:function getEmojis(){var _this2=this;var _props2=this.props;var name=_props2.name;var emojis=_props2.emojis;var recent=_props2.recent;var perLine=_props2.perLine;var emojiProps=_props2.emojiProps;var emojiSet=emojiProps.set;if(name=='Recent'){var custom=this.props.custom;var frequentlyUsed=recent||_frequently2.default.get(perLine);if(frequentlyUsed.length){emojis=frequentlyUsed.map(function(id){var emoji=custom.filter(function(e){return e.id===id;})[0];if(emoji){return emoji;}return id;}).filter(function(id){return!!(0,_utils.getData)(id,null,null,_this2.data);});}if(emojis.length===0&&frequentlyUsed.length>0){return null;}}if(emojis){emojis=emojis.slice(0);}return emojis;}},{key:'updateDisplay',value:function updateDisplay(visible){var emojis=this.getEmojis();if(!emojis){return;}this.setState({visible:visible});}},{key:'setContainerRef',value:function setContainerRef(c){this.container=c;}},{key:'setLabelRef',value:function setLabelRef(c){this.label=c;}},{key:'render',value:function render(){var _props3=this.props;var id=_props3.id;var name=_props3.name;var hasStickyPosition=_props3.hasStickyPosition;var emojiProps=_props3.emojiProps;var i18n=_props3.i18n;var perLine=_props3.perLine;var emojis=this.getEmojis();var visible=this.state.visible;var emojiSize=emojiProps.size;var emojiMargin=emojiProps.margin;var emojiSizing=emojiSize+emojiMargin;var emojisListWidth=perLine*emojiSizing+emojiMargin;return!emojis||!visible?null:_react2.default.createElement(_reactNative.View,{ref:this.setContainerRef,onLayout:this.onLayout,style:[styles.category,emojis&&!emojis.length?styles.noResults:null]},_react2.default.createElement(_reactNative.View,{style:styles.label},_react2.default.createElement(_reactNative.Text,{style:styles.labelText,ref:this.setLabelRef},i18n.categories[id])),emojis.length?_react2.default.createElement(_reactNative.FlatList,{data:emojis,keyExtractor:this.flatListKeyExtractor,getItemLayout:this.getFlatListItemLayout,renderItem:this.renderFlatListItem,numColumns:perLine,columnWrapperStyle:[styles.emojisContainer,{width:emojisListWidth}],keyboardShouldPersistTaps:'handled'}):_react2.default.createElement(_reactNative.View,{style:styles.notFound},_react2.default.createElement(_reactNative.View,null,_react2.default.createElement(_.NimbleEmoji,(0,_extends3.default)({data:this.data},emojiProps,{emoji:'sleuth_or_spy',onPress:null,onLongPress:null}))),_react2.default.createElement(_reactNative.View,{style:styles.label},_react2.default.createElement(_reactNative.Text,{style:styles.labelText},i18n.notfound))));}}]);return Category;}(_react2.default.Component);Category.defaultProps={emojis:[],hasStickyPosition:true};var _initialiseProps=function _initialiseProps(){var _this3=this;this.onLayout=function(){if(_this3.container){_this3.container.measure(function(x,y,widht,height,pageX,pageY){_this3.top=pageY;});}};this._getSanitizedData=function(props){var emoji=props.emoji;var skin=props.skin;var set=props.set;return(0,_utils.getSanitizedData)(emoji,skin,set,_this3.data);};this.flatListKeyExtractor=function(item){var emojiProps=_this3.props.emojiProps;var emoji=_this3._getSanitizedData((0,_extends3.default)({emoji:item},emojiProps));return _this3.props.name+'_emoji_'+emoji.id;};this.getFlatListItemLayout=function(layoutData,index){var emojiProps=_this3.props.emojiProps;var emojiSize=emojiProps.size;var emojiMargin=emojiProps.margin;var emojiNoMargin=emojiProps.noMargin;var emojiSizing=emojiNoMargin?emojiSize:emojiSize+emojiMargin;return{length:emojiSizing,offset:emojiSizing*index,index:index};};this.renderFlatListItem=function(_ref){var item=_ref.item;var _props4=_this3.props;var emojiProps=_props4.emojiProps;var name=_props4.name;var emoji=_this3._getSanitizedData((0,_extends3.default)({emoji:item},emojiProps));return _react2.default.createElement(_.NimbleEmoji,(0,_extends3.default)({key:name+'_emoji_'+emoji.item,emoji:emoji,data:_this3.data},emojiProps));};};exports.default=Category;