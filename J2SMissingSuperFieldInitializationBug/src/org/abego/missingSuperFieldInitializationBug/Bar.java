package org.abego.missingSuperFieldInitializationBug;

public class Bar extends Foo {

	public Bar(Object... args) {
	}

	public static void main(String[] args) {
		Bar bar = new Bar();
		
		if (bar.field != null) {
			System.out.println("bar.field initialized.");
		} else {
			throw new RuntimeException("bar.field NOT initialized");
		}
	}
}
