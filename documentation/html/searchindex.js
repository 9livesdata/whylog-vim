Search.setIndex({envversion:46,filenames:["index","modules","whylog_vim","whylog_vim.gui","whylog_vim.input_reader","whylog_vim.output_formater","whylog_vim.output_formater.teacher_formater","whylog_vim.proxy","whylog_vim.proxy.log_reader","whylog_vim.proxy.teacher","whylog_vim.tests","whylog_vim.tests.tests_input_reader","whylog_vim.tests.tests_output_formater","whylog_vim.tests.tests_proxy"],objects:{"":{whylog_vim:[2,0,0,"-"]},"whylog_vim.consts":{ActionTypes:[2,2,1,""],Constraint:[2,2,1,""],ConstraintsOutputs:[2,2,1,""],DefaultContent:[2,2,1,""],EditorStates:[2,2,1,""],FunctionNames:[2,2,1,""],LineNames:[2,2,1,""],LogType:[2,2,1,""],Messages:[2,2,1,""],ParserOutputs:[2,2,1,""],ReadMessages:[2,2,1,""],Templates:[2,2,1,""],WindowSizes:[2,2,1,""],WindowTypes:[2,2,1,""]},"whylog_vim.consts.ActionTypes":{STANDARD:[2,3,1,""],TEACHER:[2,3,1,""]},"whylog_vim.consts.Constraint":{ADD_BUTTON:[2,3,1,""],DELETE_BUTTON:[2,3,1,""],GROUP:[2,3,1,""],HEADER:[2,3,1,""],PARAM:[2,3,1,""],PARAMS_HEADER:[2,3,1,""],TYPE:[2,3,1,""]},"whylog_vim.consts.ConstraintsOutputs":{ADD_BUTTON:[2,3,1,""],DELETE_BUTTON:[2,3,1,""],GROUP:[2,3,1,""],HEADER:[2,3,1,""],PARAM:[2,3,1,""],PARAMS_HEADER:[2,3,1,""],TYPE:[2,3,1,""]},"whylog_vim.consts.DefaultContent":{UNDEFINED:[2,3,1,""]},"whylog_vim.consts.EditorStates":{ADD_CAUSE:[2,3,1,""],ASK_LOG_TYPE:[2,3,1,""],EDITOR_NORMAL:[2,3,1,""],EFFECT_ADDED:[2,3,1,""],LOG_READER:[2,3,1,""],TEACHER:[2,3,1,""],TEACHER_INPUT:[2,3,1,""]},"whylog_vim.consts.FunctionNames":{ADD_CONSTRAINT:[2,3,1,""],COPY_PARSER:[2,3,1,""],DELETE_CONSTRAINT:[2,3,1,""],DELETE_PARSER:[2,3,1,""],EDIT_CONSTRAINT:[2,3,1,""],EDIT_LINE_CONTENT:[2,3,1,""],EDIT_LOG_TYPE:[2,3,1,""],EDIT_PRIMARY_KEY_GROUPS:[2,3,1,""],EDIT_REGEX:[2,3,1,""],GUESS_REGEX:[2,3,1,""],READ_LOG_TYPE:[2,3,1,""]},"whylog_vim.consts.LineNames":{CAUSE:[2,3,1,""],CAUSE_PREFIX:[2,3,1,""],EFFECT:[2,3,1,""]},"whylog_vim.consts.LogType":{ADD_BUTTON:[2,3,1,""],CANCEL_BUTTON:[2,3,1,""],FILE_NAME_MATCHER:[2,3,1,""],HOST_PATTERN:[2,3,1,""],NAME:[2,3,1,""],PATH_PATTERN:[2,3,1,""],SUPER_PARSER:[2,3,1,""]},"whylog_vim.consts.Messages":{ADDED_EFFECT:[2,3,1,""],CASE_INFO:[2,3,1,""],COMMENT_PREFIX:[2,3,1,""],CONTENT_OF_LINE:[2,3,1,""],CONVERTER:[2,3,1,""],ENDING:[2,3,1,""],INPUT_HEADER:[2,3,1,""],INPUT_INFO:[2,3,1,""],LOGTYPE:[2,3,1,""],PRIMARY_KEY:[2,3,1,""],SELECT_LOG_TYPE:[2,3,1,""],TEACHER_HEADER:[2,3,1,""]},"whylog_vim.consts.ParserOutputs":{COPY_BUTTON:[2,3,1,""],DELETE_BUTTON:[2,3,1,""],GROUP_CONVERTER:[2,3,1,""],GUESS_BUTTON:[2,3,1,""],LINE_CONTENT:[2,3,1,""],LOG_TYPE:[2,3,1,""],MESSAGE_CONTENT:[2,3,1,""],META:[2,3,1,""],OTHERS_HEADER:[2,3,1,""],PRIMARY_KEY:[2,3,1,""],REGEX_HEADER:[2,3,1,""]},"whylog_vim.consts.ReadMessages":{TOO_MANY_LINES:[2,3,1,""]},"whylog_vim.consts.Templates":{READ_ERROR:[2,3,1,""]},"whylog_vim.consts.WindowSizes":{QUERY_WINDOW:[2,3,1,""]},"whylog_vim.consts.WindowTypes":{CASE:[2,3,1,""],INPUT:[2,3,1,""],MESSAGE:[2,3,1,""],QUERY:[2,3,1,""],TEACHER:[2,3,1,""]},"whylog_vim.exceptions":{UnknownAction:[2,5,1,""],WhylogVimException:[2,5,1,""]},"whylog_vim.gui":{VimEditor:[3,2,1,""],exceptions:[3,0,0,"-"],files_manager:[3,0,0,"-"],vim_ui_wrapper:[3,0,0,"-"],windows:[3,0,0,"-"]},"whylog_vim.gui.VimEditor":{close_query_window:[3,4,1,""],close_teacher_window:[3,4,1,""],close_window:[3,4,1,""],create_case_window:[3,4,1,""],create_input_window:[3,4,1,""],create_query_window:[3,4,1,""],create_teacher_window:[3,4,1,""],get_button_name:[3,4,1,""],get_current_filename:[3,4,1,""],get_current_line:[3,4,1,""],get_front_input:[3,4,1,""],get_input_content:[3,4,1,""],get_line_number:[3,4,1,""],get_line_offset:[3,4,1,""],get_line_source:[3,4,1,""],go_to_file:[3,4,1,""],go_to_offset:[3,4,1,""],go_to_query_window:[3,4,1,""],is_any_whylog_window_open:[3,4,1,""],is_cursor_at_case_window:[3,4,1,""],is_cursor_at_input_window:[3,4,1,""],is_cursor_at_teacher_window:[3,4,1,""],is_cursor_at_whylog_windows:[3,4,1,""],open_fold:[3,4,1,""],set_query_output:[3,4,1,""],set_syntax_folding:[3,4,1,""],set_teacher_output:[3,4,1,""]},"whylog_vim.gui.exceptions":{CannotCloseWindow:[3,5,1,""],CannotFindWindowId:[3,5,1,""],CannotGetWindowContent:[3,5,1,""],CannotSetWindowContent:[3,5,1,""],CannotSwitchToWindow:[3,5,1,""],WindowException:[3,5,1,""]},"whylog_vim.gui.files_manager":{FilesManager:[3,2,1,""]},"whylog_vim.gui.files_manager.FilesManager":{get_files_window_id:[3,1,1,""],go_to_file:[3,1,1,""],is_file_open:[3,1,1,""]},"whylog_vim.gui.vim_ui_wrapper":{VimUIWrapper:[3,2,1,""]},"whylog_vim.gui.vim_ui_wrapper.VimUIWrapper":{close_current_window:[3,1,1,""],get_buffer:[3,1,1,""],get_column:[3,1,1,""],get_current_filename:[3,1,1,""],get_current_line:[3,1,1,""],get_current_window_id:[3,1,1,""],get_cursor_offset:[3,1,1,""],get_line_number:[3,1,1,""],get_line_offset:[3,1,1,""],get_windows:[3,1,1,""],go_to_offset:[3,1,1,""],go_to_window:[3,1,1,""],normal:[3,1,1,""],open_file_at_window:[3,1,1,""],resize:[3,1,1,""],set_file_type:[3,1,1,""],set_modifiable:[3,1,1,""],set_nomodifible:[3,1,1,""],set_nowritable:[3,1,1,""],set_syntax_folding:[3,1,1,""],split_window:[3,1,1,""]},"whylog_vim.gui.windows":{WhylogWindowManager:[3,2,1,""],Window:[3,2,1,""],WindowContext:[3,2,1,""],catch_key_error:[3,6,1,""]},"whylog_vim.gui.windows.WhylogWindowManager":{are_windows_closed:[3,4,1,""],close_window:[3,4,1,""],create_window:[3,4,1,""],get_window_content:[3,4,1,""],get_window_id:[3,4,1,""],get_windows_ids:[3,4,1,""],go_to_window:[3,4,1,""],set_content:[3,4,1,""]},"whylog_vim.gui.windows.Window":{get_content:[3,4,1,""],get_window_id:[3,4,1,""],set_content:[3,4,1,""],set_modifiable:[3,4,1,""]},"whylog_vim.input_reader":{ConstraintReader:[4,2,1,""],InputReader:[4,2,1,""],consts:[4,0,0,"-"],teacher_reader:[4,0,0,"-"]},"whylog_vim.input_reader.ConstraintReader":{CONSTRAINTS:[4,3,1,""],create_constraint:[4,1,1,""]},"whylog_vim.input_reader.InputReader":{filter_comments:[4,1,1,""],get_button_name:[4,1,1,""],parse_primary_key_groups:[4,1,1,""]},"whylog_vim.input_reader.consts":{ConstraintInput:[4,2,1,""],Groups:[4,2,1,""],Input:[4,2,1,""],LogTypeInput:[4,2,1,""],RegexPatterns:[4,2,1,""]},"whylog_vim.input_reader.consts.ConstraintInput":{GROUP:[4,3,1,""],PARAM:[4,3,1,""],PARAMS_HEADER:[4,3,1,""],TYPE:[4,3,1,""]},"whylog_vim.input_reader.consts.Groups":{GROUP1:[4,3,1,""],GROUP2:[4,3,1,""]},"whylog_vim.input_reader.consts.Input":{GROUP1:[4,3,1,""],GROUP2:[4,3,1,""],INT_GROUP1:[4,3,1,""],INT_GROUP2:[4,3,1,""]},"whylog_vim.input_reader.consts.LogTypeInput":{HOST:[4,3,1,""],NAME:[4,3,1,""],PATH:[4,3,1,""]},"whylog_vim.input_reader.consts.RegexPatterns":{BUTTON:[4,3,1,""],COMMENTS:[4,3,1,""]},"whylog_vim.input_reader.teacher_reader":{TeacherReader:[4,2,1,""]},"whylog_vim.input_reader.teacher_reader.TeacherReader":{read_single_line:[4,1,1,""]},"whylog_vim.output_formater":{consts:[5,0,0,"-"],input_windows_messages:[5,0,0,"-"],log_reader_formater:[5,0,0,"-"],output_aggregator:[5,0,0,"-"],teacher_formater:[6,0,0,"-"],utils:[5,0,0,"-"]},"whylog_vim.output_formater.consts":{LogReader:[5,2,1,""],TeacherMenu:[5,2,1,""]},"whylog_vim.output_formater.consts.LogReader":{CONSTRAINT_LINKAGE:[5,3,1,""],EMPTY_OUTPUT:[5,3,1,""],EMPTY_OUTPUT_CONTINUE:[5,3,1,""],ITEM:[5,3,1,""],LINE_HEADER:[5,3,1,""],RESULT_HEADER:[5,3,1,""]},"whylog_vim.output_formater.consts.TeacherMenu":{ABANDON_BUTTON:[5,3,1,""],BUTTONS_HEADER:[5,3,1,""],END_BRACKET:[5,3,1,""],RETURN_BUTTON:[5,3,1,""],SAVE_BUTTON:[5,3,1,""],VERIFY_BUTTON:[5,3,1,""]},"whylog_vim.output_formater.input_windows_messages":{InputMessages:[5,2,1,""]},"whylog_vim.output_formater.input_windows_messages.InputMessages":{TYPE_TO_MESSAGE:[5,3,1,""],get_constraint_message:[5,1,1,""],get_edit_line_message:[5,1,1,""],get_edit_regex_message:[5,1,1,""],get_log_types_message:[5,1,1,""],get_main_set_log_type_message:[5,1,1,""],get_primary_key_message:[5,1,1,""]},"whylog_vim.output_formater.log_reader_formater":{LogReaderOutput:[5,2,1,""]},"whylog_vim.output_formater.log_reader_formater.LogReaderOutput":{format_investigation_result:[5,1,1,""],format_query:[5,1,1,""]},"whylog_vim.output_formater.output_aggregator":{OutputAggregator:[5,2,1,""],pass_function:[5,6,1,""]},"whylog_vim.output_formater.output_aggregator.OutputAggregator":{add:[5,4,1,""],add_commented:[5,4,1,""],call_button:[5,4,1,""],call_by_menu_function:[5,4,1,""],create_button:[5,4,1,""],get_content:[5,4,1,""],set_default_callback_function:[5,4,1,""]},"whylog_vim.output_formater.teacher_formater":{ConstraintsFormater:[6,2,1,""],ParserFormater:[6,2,1,""],TeacherFormater:[6,2,1,""],TeacherProxyUsingFromater:[6,2,1,""]},"whylog_vim.output_formater.teacher_formater.ConstraintsFormater":{format_constraints:[6,4,1,""]},"whylog_vim.output_formater.teacher_formater.ParserFormater":{format_parser:[6,4,1,""]},"whylog_vim.output_formater.teacher_formater.TeacherFormater":{format_rule:[6,4,1,""]},"whylog_vim.output_formater.utils":{convert_to_buttons:[5,6,1,""]},"whylog_vim.proxy":{WhylogProxy:[7,2,1,""],log_reader:[8,0,0,"-"],teacher:[9,0,0,"-"]},"whylog_vim.proxy.WhylogProxy":{action:[7,4,1,""],create_input_window:[7,4,1,""],create_set_log_type_menu:[7,4,1,""],get_state:[7,4,1,""],handle_log_type_menu:[7,4,1,""],new_teacher:[7,4,1,""],set_log_type:[7,4,1,""],set_state:[7,4,1,""],teach:[7,4,1,""],try_to_set_log_type_automatic:[7,4,1,""]},"whylog_vim.proxy.log_reader":{LogReaderProxy:[8,2,1,""]},"whylog_vim.proxy.log_reader.LogReaderProxy":{get_tree:[8,4,1,""],handle_action:[8,4,1,""],new_query:[8,4,1,""]},"whylog_vim.proxy.teacher":{TeacherProxy:[9,2,1,""],error:[9,5,1,""],exceptions:[9,0,0,"-"],utils:[9,0,0,"-"]},"whylog_vim.proxy.teacher.TeacherProxy":{add_cause:[9,4,1,""],add_constraint:[9,4,1,""],copy_parser:[9,4,1,""],delete_constraint:[9,4,1,""],edit_converter:[9,4,1,""],edit_log_type:[9,4,1,""],edit_primary_key_groups:[9,4,1,""],guess_regex:[9,4,1,""],handle_menu_signal:[9,4,1,""],new_lesson:[9,4,1,""],print_teacher:[9,4,1,""],read_input:[9,4,1,""]},"whylog_vim.proxy.teacher.exceptions":{CannotGoToPosition:[9,5,1,""]},"whylog_vim.proxy.teacher.utils":{MenuHandler:[9,2,1,""]},"whylog_vim.proxy.teacher.utils.MenuHandler":{back_after_edit_line_content:[9,4,1,""],back_after_edit_regex:[9,4,1,""],delete_parser:[9,4,1,""],edit_line_content:[9,4,1,""],edit_regex:[9,4,1,""]},"whylog_vim.utils":{get_id_from_name:[2,6,1,""],get_parser_name:[2,6,1,""]},whylog_vim:{consts:[2,0,0,"-"],exceptions:[2,0,0,"-"],gui:[3,0,0,"-"],input_reader:[4,0,0,"-"],output_formater:[5,0,0,"-"],proxy:[7,0,0,"-"],utils:[2,0,0,"-"],whylog_action:[2,6,1,""],whylog_teach:[2,6,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","classmethod","Python class method"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","exception","Python exception"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:classmethod","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception","6":"py:function"},terms:{"__init__":5,"_sre":4,"case":2,"class":[2,3,4,5,6,7,8,9],"const":1,"default":5,"function":[3,5,7],"new":[5,7],"return":3,"super":2,"true":6,"try":7,abandon_button:5,abandon_rul:5,abov:2,action:[2,7],action_after_set_log_typ:7,action_typ:2,actiontyp:2,add:[2,5],add_button:2,add_caus:[2,9],add_com:5,add_constraint:[2,9],add_log_typ:2,added_effect:2,agreg:3,are_windows_clos:3,arg:3,ask:[2,7],ask_log_typ:2,automat:7,avoid:3,back_after_edit_line_cont:9,back_after_edit_regex:9,base:[2,3,4,5,6,7,8,9],becaus:3,below:[2,5],between:3,block:[2,5],button:[4,5],buttons_head:5,byte_offset:3,call:5,call_button:5,call_by_menu_funct:5,callback_funct:5,can:[2,3],cancel:2,cancel_button:2,cannot:2,cannotclosewindow:3,cannotfindwindowid:3,cannotgetwindowcont:3,cannotgotoposit:9,cannotsetwindowcont:3,cannotswitchtowindow:3,case_info:2,catch_key_error:3,caus:[2,5],cause_:2,cause_prefix:2,chang:[2,3],classmethod:[3,4,5],close:3,close_current_window:3,close_query_window:3,close_teacher_window:3,close_window:3,command:3,comment:[2,4,5],comment_prefix:2,config:[5,7,8,9],constraint:[2,4,5,6,9],constraint_linkag:5,constraintinput:4,constraintread:4,constraintsformat:6,constraintsoutput:2,content1:4,content2:4,content:[0,1],content_of_lin:2,convert:2,convert_to_button:5,copi:2,copy_button:2,copy_lin:2,copy_pars:[2,9],creat:[5,7],create_button:5,create_case_window:3,create_constraint:4,create_input_window:[3,7],create_query_window:3,create_set_log_type_menu:7,create_teacher_window:3,create_window:3,cursor:3,default_callback_funct:5,default_input:3,defaultcont:2,delet:2,delete_button:2,delete_constraint:[2,9],delete_lin:2,delete_pars:[2,9],describ:5,docstr:5,due:5,edit:2,edit_constraint:2,edit_convert:9,edit_line_cont:[2,9],edit_log_typ:[2,9],edit_primary_key_group:[2,9],edit_regex:[2,9],editor:[2,7,8,9],editor_input:4,editor_norm:2,editorst:2,effect:[2,6],effect_ad:2,elem_list:5,element:5,empty_output:5,empty_output_continu:5,end:2,end_bracket:5,enter:[2,5],error:[2,9],exampl:3,except:1,fals:3,file:2,file_nam:3,file_name_match:2,filenam:3,files_manag:[1,2],filesmanag:3,filter_com:4,fine:3,format_constraint:6,format_investigation_result:5,format_pars:6,format_queri:5,format_rul:6,front:3,front_input:[5,8],function_lin:5,function_meta:5,function_nam:5,functionnam:2,get_buff:3,get_button_nam:[3,4],get_column:3,get_constraint_messag:5,get_cont:[3,5],get_current_filenam:3,get_current_lin:3,get_current_window_id:3,get_cursor_offset:3,get_edit_line_messag:5,get_edit_regex_messag:5,get_files_window_id:3,get_front_input:3,get_id_from_nam:2,get_input_cont:3,get_line_numb:3,get_line_offset:3,get_line_sourc:3,get_log_typ:7,get_log_types_messag:5,get_main_set_log_type_messag:5,get_parser_nam:2,get_primary_key_messag:5,get_stat:7,get_tre:8,get_window:3,get_window_cont:3,get_window_id:3,get_windows_id:3,given:3,go_to_fil:3,go_to_offset:3,go_to_query_window:3,go_to_window:3,group1:4,group2:4,group:[2,4,9],group_convert:2,guess:2,guess_button:2,guess_regex:[2,9],gui:[1,2],handle_act:8,handle_log_type_menu:7,handle_menu_sign:9,header:2,host:[2,4],host_pattern:2,ident:4,identicalconstraint:4,index:0,input:[2,3,4],input_head:2,input_info:2,input_read:[1,2],input_windows_messag:[1,2],inputmessag:5,inputread:4,int_group1:4,int_group2:4,investig:5,investigation_result:5,is_any_whylog_window_open:3,is_cursor_at_case_window:3,is_cursor_at_input_window:3,is_cursor_at_teacher_window:3,is_cursor_at_whylog_window:3,is_effect:9,is_file_open:3,isn:7,item:5,kei:[2,5],kwarg:3,line:[2,3,4,5],line_cont:[2,5],line_head:5,line_numb:5,line_sourc:7,linenam:2,log:[2,7],log_read:[2,7],log_reader_format:[1,2],log_typ:[2,5,7],logread:5,logreaderoutput:5,logreaderproxi:8,logtyp:[2,7],logtypeinput:4,main_proxi:[8,9],match:2,matcher:2,mean:[3,5],menu:2,menuhandl:9,messag:2,message_cont:2,meta:[2,5],method:3,modifi:3,modul:[0,1],move:3,name:[2,3,4],neither:3,new_lesson:9,new_queri:8,new_teach:7,none:[3,5],nor:3,normal:[2,3],object:[2,3,4,5,6,7,8,9],offset:[2,3,4,5],old_cont:5,old_regex:5,onli:2,open_file_at_window:3,open_fold:3,option:[2,5],other:2,others_head:2,output:[5,6],output_aggreg:[1,2],output_format:[1,2],outputaggreg:5,outsid:3,packag:1,page:0,param:[2,4,5],params_head:[2,4],params_ident:5,parse_primary_key_group:4,parser:[2,5,6,9],parser_id:[2,6,9],parserformat:6,parseroutput:2,paser:2,pass_funct:5,path:[2,4],path_pattern:2,pattern:2,posit:9,possibl:7,press:[2,3,5],primari:2,primary_kei:2,print_teach:9,proxi:[1,2],put:2,queri:2,query_output:5,query_window:2,read:2,read_error:2,read_funct:5,read_input:9,read_log_typ:2,read_single_lin:4,readmessag:2,recogn:2,regex:2,regex_head:2,regexpattern:4,resiz:3,result:5,result_head:5,return_button:5,return_to_fil:5,rule:[2,5],rule_int:6,save:5,save_button:5,search:0,select:[2,5],select_log_typ:2,set:[3,7],set_cont:3,set_default_callback_funct:5,set_file_typ:3,set_log_typ:7,set_modifi:3,set_nomodif:3,set_nowrit:3,set_query_output:3,set_stat:7,set_syntax_fold:3,set_teacher_output:3,should:5,singl:2,situat:3,size:3,someth:3,specifi:5,split_window:3,splited_window_s:3,sre_pattern:4,standard:2,state:[2,7],submodul:1,subpackag:1,super_pars:2,teach:7,teacher:[2,7],teacher_format:[2,5],teacher_head:2,teacher_input:2,teacher_proxi:6,teacher_read:[1,2],teacherformat:6,teachermenu:5,teacherproxi:9,teacherproxyusingfromat:6,teacherread:4,templat:2,test:[1,2],tests_input_read:[2,10],tests_output_agreg:[2,10],tests_output_format:[2,10],tests_parser_menu_oper:[2,10],tests_proxi:[2,10],tests_unit:[2,10],tests_unit_proxy_main:[2,10],tests_util:[2,10],text:2,thi:[2,3,5,7],too_many_lin:2,toupl:5,try_to_set_log_type_automat:7,type:[2,4,7],type_to_messag:5,undefin:2,unknownact:2,user:[3,7],util:1,validation_result:6,valu:3,verify_button:5,verify_rul:5,vim_ui_wrapp:[1,2],vimeditor:3,vimuiwrapp:3,want:3,when:3,where:3,which:7,whole:3,whylog_act:2,whylog_cas:[2,5],whylog_input:[2,5],whylog_messag:2,whylog_query_output:2,whylog_teach:[2,5],whylogproxi:7,whylogteach:5,whylogvimexcept:[2,3,9],whylogwindowmanag:3,window:[1,2],window_id:3,window_typ:3,windowcontext:3,windowexcept:3,windows:2,windowtyp:2,work:3,you:2},titles:["Welcome to Whylog-vim&#8217;s documentation!","whylog_vim","whylog_vim package","whylog_vim.gui package","whylog_vim.input_reader package","whylog_vim.output_formater package","whylog_vim.output_formater.teacher_formater package","whylog_vim.proxy package","whylog_vim.proxy.log_reader package","whylog_vim.proxy.teacher package","whylog_vim.tests package","whylog_vim.tests.tests_input_reader package","whylog_vim.tests.tests_output_formater package","whylog_vim.tests.tests_proxy package"],titleterms:{"const":[2,4,5],content:[2,3,4,5,6,7,8,9,10,11,12,13],document:0,except:[2,3,9],files_manag:3,gui:3,indic:0,input_read:4,input_windows_messag:5,log_read:8,log_reader_format:5,modul:[2,3,4,5,6,7,8,9,10,11,12,13],output_aggreg:5,output_format:[5,6],packag:[2,3,4,5,6,7,8,9,10,11,12,13],proxi:[7,8,9],submodul:[2,3,4,5,9,11,12,13],subpackag:[2,5,7,10],tabl:0,teacher:9,teacher_format:6,teacher_read:4,test:[10,11,12,13],tests_input_read:11,tests_output_agreg:12,tests_output_format:12,tests_parser_menu_oper:13,tests_proxi:13,tests_unit:11,tests_unit_proxy_main:13,tests_util:12,util:[2,5,9,13],vim:0,vim_ui_wrapp:3,welcom:0,whylog:0,whylog_vim:[1,2,3,4,5,6,7,8,9,10,11,12,13],window:3}})