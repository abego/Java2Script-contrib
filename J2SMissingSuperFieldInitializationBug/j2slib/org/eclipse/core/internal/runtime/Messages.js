﻿Clazz.declarePackage ("org.eclipse.core.internal.runtime");
Clazz.load (["org.eclipse.osgi.util.NLS", "org.eclipse.osgi.framework.internal.core.MessageResourceBundle"], "org.eclipse.core.internal.runtime.Messages", null, function () {
c$ = Clazz.declareType (org.eclipse.core.internal.runtime, "Messages", org.eclipse.osgi.util.NLS);
c$.reloadMessages = Clazz.defineMethod (c$, "reloadMessages", 
function () {
org.eclipse.osgi.util.NLS.initializeMessages ("org.eclipse.core.internal.runtime.messages", org.eclipse.core.internal.runtime.Messages);
});
Clazz.defineStatics (c$,
"BUNDLE_NAME", "org.eclipse.core.internal.runtime.messages",
"adapters_badAdapterFactory", null,
"application_invalidExtension", null,
"application_noIdFound", null,
"application_notFound", null,
"application_returned", null,
"content_badInitializationData", null,
"content_errorReadingContents", null,
"content_errorLoadingSettings", null,
"content_errorSavingSettings", null,
"content_invalidContentDescriber", null,
"content_invalidProperty", null,
"content_missingIdentifier", null,
"content_missingName", null,
"content_parserConfiguration", null,
"jobs_blocked0", null,
"jobs_blocked1", null,
"jobs_internalError", null,
"jobs_waitFamSub", null,
"line_separator_platform_mac_os_9", null,
"line_separator_platform_unix", null,
"line_separator_platform_windows", null,
"meta_appNotInit", null,
"meta_authFormatChanged", null,
"meta_couldNotCreate", null,
"meta_exceptionParsingLog", null,
"meta_instanceDataUnspecified", null,
"meta_keyringFileAlreadySpecified", null,
"meta_noDataModeSpecified", null,
"meta_notDir", null,
"meta_pluginProblems", null,
"meta_readonly", null,
"meta_regCacheIOExceptionReading", null,
"meta_registryCacheInconsistent", null,
"meta_registryCacheReadProblems", null,
"meta_registryCacheWriteProblems", null,
"meta_unableToCreateCache", null,
"meta_unableToReadAuthorization", null,
"meta_unableToReadCache", null,
"meta_unableToWriteAuthorization", null,
"ok", null,
"parse_nonSingleton", null,
"parse_badPrereqOnFrag", null,
"parse_doubleSeparatorVersion", null,
"parse_duplicateFragment", null,
"parse_duplicateLib", null,
"parse_duplicatePlugin", null,
"parse_emptyPluginVersion", null,
"parse_error", null,
"parse_errorNameLineColumn", null,
"parse_errorProcessing", null,
"parse_extPointDisabled", null,
"parse_extPointUnknown", null,
"parse_failedParsingManifest", null,
"parse_fourElementPluginVersion", null,
"parse_fragmentMissingAttr", null,
"parse_fragmentMissingIdName", null,
"parse_internalStack", null,
"parse_missingAttribute", null,
"parse_missingAttributeLine", null,
"parse_missingFPName", null,
"parse_missingFPVersion", null,
"parse_missingFragmentPd", null,
"parse_missingPluginId", null,
"parse_missingPluginName", null,
"parse_missingPluginVersion", null,
"parse_nullFragmentIdentifier", null,
"parse_nullPluginIdentifier", null,
"parse_numericMajorComponent", null,
"parse_numericMinorComponent", null,
"parse_numericServiceComponent", null,
"parse_oneElementPluginVersion", null,
"parse_pluginMissingAttr", null,
"parse_pluginMissingIdName", null,
"parse_postiveMajor", null,
"parse_postiveMinor", null,
"parse_postiveService", null,
"parse_prereqDisabled", null,
"parse_prereqLoop", null,
"parse_prereqOptLoop", null,
"parse_problems", null,
"parse_separatorEndVersion", null,
"parse_separatorStartVersion", null,
"parse_unknownAttribute", null,
"parse_unknownAttributeLine", null,
"parse_unknownElement", null,
"parse_unknownElementLine", null,
"parse_unknownEntry", null,
"parse_unknownLibraryType", null,
"parse_unknownTopElement", null,
"parse_unsatisfiedOptPrereq", null,
"parse_unsatisfiedPrereq", null,
"parse_validExport", null,
"parse_validMatch", null,
"parse_xmlParserNotAvailable", null,
"plugin_deactivatedLoad", null,
"plugin_eventListenerError", null,
"plugin_extDefNoClass", null,
"plugin_extDefNotFound", null,
"plugin_initObjectError", null,
"plugin_instantiateClassError", null,
"plugin_loadClassError", null,
"plugin_notPluginClass", null,
"plugin_pluginDisabled", null,
"plugin_shutdownProblems", null,
"plugin_startupProblems", null,
"plugin_unableToResolve", null,
"preferences_applyProblems", null,
"preferences_classCastScope", null,
"preferences_classCastListener", null,
"preferences_classCastFilterEntry", null,
"preferences_errorWriting", null,
"preferences_exportProblems", null,
"preferences_failedDelete", null,
"preferences_fileNotFound", null,
"preferences_importProblems", null,
"preferences_incompatible", null,
"preferences_invalidExtensionSuperclass", null,
"preferences_invalidFileFormat", null,
"preferences_loadException", null,
"preferences_matching", null,
"preferences_missingClassAttribute", null,
"preferences_missingScopeAttribute", null,
"preferences_removedNode", null,
"preferences_removeExported", null,
"preferences_saveException", null,
"preferences_saveProblems", null,
"preferences_validate", null,
"preferences_validationException", null,
"product_notFound", null,
"provider_invalid", null,
"provider_invalid_general", null,
"url_badVariant", null,
"url_createConnection", null,
"url_invalidURL", null,
"url_noaccess", null,
"url_noOutput", null,
"url_resolveFragment", null,
"url_resolvePlugin", null);
{
org.eclipse.core.internal.runtime.Messages.reloadMessages ();
}});
