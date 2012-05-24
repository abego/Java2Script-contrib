package org.abego.j2stest.nativeobjectmode;

import java.util.HashMap;

public class ClassComments {
	private HashMap classComments = new HashMap();

	public void setComment(Class clazz, String comment) {
		classComments.put(clazz, comment);
	}

	public String getComment(Class clazz) {
		return (String) classComments.get(clazz);
	}
}
