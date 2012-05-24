package org.abego.j2stest.nativeobjectmode;

import java.util.HashMap;

public class ClassAsHashMapKeyTest {
	public static boolean runTest() {
		HashMap classNames = new HashMap();
		
		String fooCmt = "The Foo Class";
		
		classNames.put(Foo.class, fooCmt);
		
		String cmt = (String)classNames.get(Foo.class);
		
		return fooCmt.equals(cmt);
	}
}
