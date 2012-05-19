package org.abego.j2stest.fieldinitialization;

public class Moo_WithOwnField extends Bar {
	public Object mooField = new Object();
	
	public static Moo_WithOwnField createMoo() {
		return new Moo_WithOwnField();
	}
}
