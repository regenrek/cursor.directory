"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
exports.getSections = getSections;
exports.getRuleBySlug = getRuleBySlug;
var elixir_1 = require("@/data/rules/elixir");
var al_1 = require("./rules/al");
var angular_1 = require("./rules/angular");
var astro_1 = require("./rules/astro");
var autohotkey_1 = require("./rules/autohotkey");
var blazor_1 = require("./rules/blazor");
var bootstrap_1 = require("./rules/bootstrap");
var c_1 = require("./rules/c");
var convex_1 = require("./rules/convex");
var data_analyst_1 = require("./rules/data-analyst");
var deep_learning_1 = require("./rules/deep-learning");
var django_1 = require("./rules/django");
var dotnet_1 = require("./rules/dotnet");
var expo_1 = require("./rules/expo");
var fastapi_1 = require("./rules/fastapi");
var fastify_1 = require("./rules/fastify");
var flask_1 = require("./rules/flask");
var flutter_1 = require("./rules/flutter");
var front_end_1 = require("./rules/front-end");
var gastby_1 = require("./rules/gastby");
var go_1 = require("./rules/go");
var htmlandcss_1 = require("./rules/htmlandcss");
var htmx_1 = require("./rules/htmx");
var ionic_1 = require("./rules/ionic");
var java_1 = require("./rules/java");
var jax_1 = require("./rules/jax");
var julia_1 = require("./rules/julia");
var laravel_1 = require("./rules/laravel");
var meta_prompt_1 = require("./rules/meta-prompt");
var monorepo_tamagui_1 = require("./rules/monorepo-tamagui");
var nestjs_1 = require("./rules/nestjs");
var nextjs_1 = require("./rules/nextjs");
var nuxtjs_1 = require("./rules/nuxtjs");
var onchainkit_1 = require("./rules/onchainkit");
var pixijs_1 = require("./rules/pixijs");
var python_1 = require("./rules/python");
var rails_1 = require("./rules/rails");
var react_native_1 = require("./rules/react-native");
var remix_1 = require("./rules/remix");
var rust_1 = require("./rules/rust");
var salesforce_1 = require("./rules/salesforce");
var solana_1 = require("./rules/solana");
var solidity_1 = require("./rules/solidity");
var svelte_1 = require("./rules/svelte");
var sveltekit_1 = require("./rules/sveltekit");
var swift_1 = require("./rules/swift");
var tauri_1 = require("./rules/tauri");
var technical_tutorials_1 = require("./rules/technical-tutorials");
var terraform_1 = require("./rules/terraform");
var uiux_design_1 = require("./rules/uiux-design");
var unity_c_sharp_1 = require("./rules/unity-c-sharp");
var vue_1 = require("./rules/vue");
var web_development_1 = require("./rules/web-development");
var wordpress_1 = require("./rules/wordpress");
var wordpress_woocommerce_1 = require("./rules/wordpress-woocommerce");
var lua_1 = require("./rules/lua");
var android_1 = require("./rules/android");
var ghost_tailwindcss_1 = require("./rules/ghost-tailwindcss");
var devops_backend_1 = require("./rules/devops-backend");
exports.rules = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], al_1.ALRules, true), angular_1.angularRules, true), astro_1.astroRules, true), autohotkey_1.autohotkeyRules, true), blazor_1.blazorRules, true), bootstrap_1.bootstrapRules, true), c_1.cRules, true), convex_1.convexRules, true), data_analyst_1.dataAnalystRules, true), deep_learning_1.deepLearningRules, true), django_1.djangoRules, true), dotnet_1.dotnetRules, true), elixir_1.elixirRules, true), expo_1.expoReactNativeRules, true), fastapi_1.fastapiRules, true), fastify_1.fastifyRules, true), flask_1.flaskRules, true), flutter_1.flutterRules, true), front_end_1.frontEndRules, true), gastby_1.gatsbyRules, true), go_1.goRules, true), htmlandcss_1.htmlAndCssRules, true), htmx_1.htmxRules, true), ionic_1.ionicRules, true), java_1.javaRules, true), jax_1.jaxRules, true), julia_1.juliaRules, true), laravel_1.laravelRules, true), meta_prompt_1.metaPromptRules, true), monorepo_tamagui_1.monorepoTamagui, true), nestjs_1.nestjsRules, true), nextjs_1.nextjsRules, true), nuxtjs_1.nuxtJsRules, true), pixijs_1.pixiJsRules, true), python_1.pythonRules, true), rails_1.railsRules, true), react_native_1.reactNativeRules, true), remix_1.remixRules, true), rust_1.rustRules, true), salesforce_1.salesforceRules, true), solana_1.solanaRules, true), solidity_1.solidityRules, true), svelte_1.svelteRules, true), sveltekit_1.svelteKitRules, true), swift_1.swiftuiRules, true), tauri_1.tauriRules, true), technical_tutorials_1.technicalTutorialsRules, true), uiux_design_1.uiuxRules, true), unity_c_sharp_1.unityCSharpRules, true), vue_1.vueTsRules, true), web_development_1.webDevelopmentRules, true), wordpress_1.wordpressRules, true), wordpress_woocommerce_1.wordpressWoocommerce, true), terraform_1.terraformRules, true), onchainkit_1.onchainkitRules, true), lua_1.luaRules, true), android_1.androidRules, true), ghost_tailwindcss_1.ghostTailwindcssRules, true), devops_backend_1.devopsRules, true).map(function (rule) { return (__assign(__assign({}, rule), { libs: rule.libs || [] })); });
function getSections() {
    var categories = Array.from(new Set(exports.rules.flatMap(function (rule) { return rule.tags; })));
    return categories
        .map(function (tag) { return ({
        tag: tag,
        rules: exports.rules.filter(function (rule) { return rule.tags.includes(tag); }),
    }); })
        .sort(function (a, b) { return b.rules.length - a.rules.length; });
}
function getRuleBySlug(slug) {
    return exports.rules.find(function (rule) { return rule.slug === slug; });
}
