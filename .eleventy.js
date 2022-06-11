const _ = require("lodash");
const { DateTime } = require("luxon");

module.exports = function(config) {
    config.setUseGitIgnore(true);
    config.addPassthroughCopy("./src/assets/**/*");
    config.addPassthroughCopy("./src/admin/**/*");

    config.addShortcode("dateToday", () => `${new Date().toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}`);
    config.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

    config.addNunjucksFilter("take", (collection, count) => collection.slice(0, count || 10));
    config.addNunjucksFilter("postDate", (dateObject) => {
        return DateTime
            .fromJSDate(dateObject)
            .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
    });

    config.addCollection("postsByYear", (collection) => {
        return _
            .chain(collection.getAllSorted())
            .filter((post) => post.url && post.inputPath.startsWith('./src/blog/'))
            .groupBy((post) => post.date.getFullYear())
            .toPairs()
            .reverse()
            .value();
        });
    config.addCollection("postsByCategory", (collection) => {
        return _
            .chain(collection.getAllSorted())
            .filter((post) => post.url && post.inputPath.startsWith('./src/blog/'))
            .groupBy((post) => post.data.category)
            .toPairs()
            .reverse()
            .value();
        });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}