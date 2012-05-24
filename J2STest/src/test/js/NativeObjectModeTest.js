(function() {
	module("Native Object Mode");

	asyncTest("class access", function() {
		ClazzLoader.loadClass(
				"org.abego.j2stest.nativeobjectmode.ClassAsHashMapKeyTest", function() {
					start();

					ok(org.abego.j2stest.nativeobjectmode.ClassAsHashMapKeyTest.runTest());
				});
	});
})();
