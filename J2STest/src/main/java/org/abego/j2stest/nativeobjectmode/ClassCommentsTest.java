package org.abego.j2stest.nativeobjectmode;

public class ClassCommentsTest {
	public static boolean runTest() {
		ClassComments cc = new ClassComments();
		
		String fooCmt = "The Foo Class";
		
		cc.setComment(Foo.class, fooCmt);
		
		String cmt = cc.getComment(Foo.class);
		return fooCmt.equals(cmt);
	}
}
