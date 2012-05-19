package org.abego.j2stest.fieldinitialization;

public class Bar_WithOwnField extends Foo {
	public Object barField = new Object();
	
	public Bar_WithOwnField(Object... args) {
	}

	public static Bar_WithOwnField createBar() {
		return new Bar_WithOwnField();
	}
	
	
	
	public static void main(String[] args) {
		Bar_WithOwnField bar = new Bar_WithOwnField();
		
		if (bar.field != null) {
			System.out.println("bar.field initialized.");
		} else {
			throw new RuntimeException("bar.field NOT initialized");
		}
	}
}
