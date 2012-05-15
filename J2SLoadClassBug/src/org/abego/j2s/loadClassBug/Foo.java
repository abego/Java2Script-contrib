package org.abego.j2s.loadClassBug;

public class Foo implements Moo {
	private static Bar bar = init();

	private static Bar init() {
		return new Bar();
	}
}
