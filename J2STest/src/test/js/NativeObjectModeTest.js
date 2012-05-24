(function() {
	module("Native Object Mode");

	asyncTest("class access", function() {
		ClazzLoader.loadClass(
				"org.abego.j2stest.nativeobjectmode.ClassCommentsTest", function() {
					start();

					var ClassCommentsTest = org.abego.j2stest.nativeobjectmode.ClassCommentsTest;

					ok(ClassCommentsTest.runTest());
				});
	});
})();
