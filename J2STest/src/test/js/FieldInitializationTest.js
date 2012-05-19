(function() {
	module("Field Initialization");

	asyncTest("own field initialization", function() {
		ClazzLoader.loadClass(
				"org.abego.j2stest.fieldinitialization.Foo", function() {
					start();

					var Foo = org.abego.j2stest.fieldinitialization.Foo;

					var obj = Foo.createFoo();

					ok(obj.field != null, "own field initialized");
				});
	});

	asyncTest("inherited field initialization (incl. vararg constructor)",
	function() {
		ClazzLoader.loadClass(
				"org.abego.j2stest.fieldinitialization.Bar", function() {
					start();
					var Bar = org.abego.j2stest.fieldinitialization.Bar;

					var obj = Bar.createBar();

					ok(obj.field != null, "inherited field initialized");
				});
	});

	asyncTest("inherited field and own field initialization (incl. vararg constructor)",
			function() {
				ClazzLoader.loadClass(
						"org.abego.j2stest.fieldinitialization.Bar_WithOwnField", function() {
							start();

							var Bar_WithOwnField = org.abego.j2stest.fieldinitialization.Bar_WithOwnField;
							var obj = Bar_WithOwnField.createBar();

							ok(obj.field != null, "inherited field initialized");
							ok(obj.barField != null, "own field initialized");
						});
			});

	asyncTest("indirectly inherited field initialization (incl. vararg constructor)",
			function() {
				ClazzLoader.loadClass(
						"org.abego.j2stest.fieldinitialization.Moo", function() {
							start();

							var Moo = org.abego.j2stest.fieldinitialization.Moo;
							var obj = Moo.createMoo();

							ok(obj.field != null, "indirectly inherited field initialized");
						});
			});
	
	asyncTest("indirectly inherited field and own field initialization (incl. vararg constructor)",
			function() {
				ClazzLoader.loadClass(
						"org.abego.j2stest.fieldinitialization.Moo_WithOwnField", function() {
							start();

							var Moo_WithOwnField = org.abego.j2stest.fieldinitialization.Moo_WithOwnField;
							var obj = Moo_WithOwnField.createMoo();

							ok(obj.field != null, "indirectly inherited field initialized");
							ok(obj.mooField != null, "own field initialized");
						});
			});
})();
