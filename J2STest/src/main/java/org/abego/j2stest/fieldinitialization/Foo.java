package org.abego.j2stest.fieldinitialization;


public class Foo {
	public Object field = new Object();
	
	public Foo() {
	}	
	
	public static Foo createFoo() {
		return new Foo();
	}
	
	
	
	public static void main(String[] args) {
		Foo foo = new Foo();
		
		if (foo.field != null) {
			System.out.println("foo.field initialized.");
		} else {
			throw new RuntimeException("foo.field not initialized");
		}
	}
}
