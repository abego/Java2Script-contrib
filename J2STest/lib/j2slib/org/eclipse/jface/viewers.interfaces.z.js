﻿/* http://j2s.sf.net/ */Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"IBaseLabelProvider");
Clazz.declarePackage("org.eclipse.jface.viewers");
c$=Clazz.declareInterface(org.eclipse.jface.viewers,"IBasicPropertyConstants");
Clazz.defineStatics(c$,
"P_TEXT","org.eclipse.jface.text",
"P_IMAGE","org.eclipse.jface.image",
"P_CHILDREN","org.eclipse.jface.children",
"P_PARENT","org.eclipse.jface.parent");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ICellEditorListener");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ICellEditorValidator");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ICellModifier");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ICheckable");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ICheckStateListener");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"IColorDecorator");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"IColorProvider");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"IContentProvider");
Clazz.declarePackage("org.eclipse.jface.viewers");
c$=Clazz.declareInterface(org.eclipse.jface.viewers,"IDecoration");
Clazz.defineStatics(c$,
"TOP_LEFT",0,
"TOP_RIGHT",1,
"BOTTOM_LEFT",2,
"BOTTOM_RIGHT",3,
"UNDERLAY",4);
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"IDoubleClickListener");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"IElementComparer");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"IFilter");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"IFontDecorator");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"IFontProvider");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"IInputProvider");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.IInputProvider","$.ISelectionProvider"],"org.eclipse.jface.viewers.IInputSelectionProvider",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"IInputSelectionProvider",[org.eclipse.jface.viewers.IInputProvider,org.eclipse.jface.viewers.ISelectionProvider]);
});
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.IBaseLabelProvider"],"org.eclipse.jface.viewers.ILabelDecorator",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"ILabelDecorator",org.eclipse.jface.viewers.IBaseLabelProvider);
});
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.ILabelDecorator"],"org.eclipse.jface.viewers.IDelayedLabelDecorator",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"IDelayedLabelDecorator",org.eclipse.jface.viewers.ILabelDecorator);
});
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.IBaseLabelProvider"],"org.eclipse.jface.viewers.ILabelProvider",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"ILabelProvider",org.eclipse.jface.viewers.IBaseLabelProvider);
});
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ILabelProviderListener");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.IContentProvider"],"org.eclipse.jface.viewers.ILazyContentProvider",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"ILazyContentProvider",org.eclipse.jface.viewers.IContentProvider);
});
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.IBaseLabelProvider"],"org.eclipse.jface.viewers.ILightweightLabelDecorator",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"ILightweightLabelDecorator",org.eclipse.jface.viewers.IBaseLabelProvider);
});
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"IOpenListener");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ISelection");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ISelectionChangedListener");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ISelectionProvider");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.ISelectionProvider"],"org.eclipse.jface.viewers.IPostSelectionProvider",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"IPostSelectionProvider",org.eclipse.jface.viewers.ISelectionProvider);
});
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.IContentProvider"],"org.eclipse.jface.viewers.IStructuredContentProvider",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"IStructuredContentProvider",org.eclipse.jface.viewers.IContentProvider);
});
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.ISelection"],"org.eclipse.jface.viewers.IStructuredSelection",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"IStructuredSelection",org.eclipse.jface.viewers.ISelection);
});
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ITableColorProvider");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ITableFontProvider");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.IBaseLabelProvider"],"org.eclipse.jface.viewers.ITableLabelProvider",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"ITableLabelProvider",org.eclipse.jface.viewers.IBaseLabelProvider);
});
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.IStructuredContentProvider"],"org.eclipse.jface.viewers.ITreeContentProvider",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"ITreeContentProvider",org.eclipse.jface.viewers.IStructuredContentProvider);
});
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.declareInterface(org.eclipse.jface.viewers,"ITreeViewerListener");
Clazz.declarePackage("org.eclipse.jface.viewers");
Clazz.load(["org.eclipse.jface.viewers.IBaseLabelProvider"],"org.eclipse.jface.viewers.IViewerLabelProvider",null,function(){
Clazz.declareInterface(org.eclipse.jface.viewers,"IViewerLabelProvider",org.eclipse.jface.viewers.IBaseLabelProvider);
});
