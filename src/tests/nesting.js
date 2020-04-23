module.exports = {
  "Feature columns": function (browser) {
    const nightwatch = browser.page.nightwatch();
    const { featuresLeft, featuresRight } = nightwatch.section;

    nightwatch.navigate();

    featuresLeft.expect.element("@firstHeading").text.to.equal("Clean Syntax");
    featuresRight.expect
      .element("@firstHeading")
      .text.to.equal("Built-in Test Runner");
  },
};
