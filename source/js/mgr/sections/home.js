Crosslinks.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'crosslinks-panel-home',
            renderTo: 'crosslinks-panel-home'
        }]
    });
    Crosslinks.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(Crosslinks.page.Home, MODx.Component);
Ext.reg('crosslinks-page-home', Crosslinks.page.Home);
