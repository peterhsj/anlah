$(document).ready(function() {
    //引入各元件
    $('#headerTxt').load('header.html');
    $('#headerContent').load('header_content.html');
    $('#mainMenuTxt').load('mainMenu.html');
    $('#fatFooterTxt').load('fatFooter.html');
    $('#footerTxt').load('footer.html');

    // 字體放大
    $('.font-large').on('click', function (event) {
        /* Act on the event */
        event.preventDefault();
        if ($('.subContent').hasClass('smallFont')) {
            $('.subContent').removeClass('smallFont').addClass('largeFont');
        } else {
            $('.subContent').addClass('largeFont');
        }

        //  $('.subContent').css('font-size', '1.176rem');
    });
    // 字體放中
    $('.font-default').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        if ($('.subContent').hasClass('smallFont')) {
            $('.subContent').removeClass('smallFont');
        }
        if ($('.subContent').hasClass('largeFont')) {
            $('.subContent').removeClass('largeFont');
        }
    });
    // 字體放小
    $('.font-small').click(function (event) {
        /* Act on the event */
        event.preventDefault();
        if ($('.subContent').hasClass('largeFont')) {
            $('.subContent').removeClass('largeFont').addClass('smallFont');
        } else {
            $('.subContent').addClass('smallFont');
        }
    });
    // Data Table
    $('#myTable').DataTable({
        "language": {
            "processing":   "處理中...",
            "loadingRecords": "載入中...",
            "lengthMenu":   "顯示 _MENU_ 筆結果",
            "zeroRecords":  "沒有符合的結果",
            "info":         "顯示第 _START_ 至 _END_ 筆結果，共 _TOTAL_ 筆",
            "infoEmpty":    "顯示第 0 至 0 筆結果，共 0 筆",
            "infoFiltered": "(從 _MAX_ 筆結果中過濾)",
            "infoPostFix":  "",
            "search":       "搜尋:",
            "searchPlaceholder": "請輸入關鍵字",
            "paginate": {
                "first":    "第一頁",
                "previous": "上一頁",
                "next":     "下一頁",
                "last":     "最後一頁"
            },
            "aria": {
                "sortAscending":  ": 升冪排列",
                "sortDescending": ": 降冪排列"
            }
        },
        "pagingType": "full_numbers",
        "ordering": false
        // ,
        // "searching": false
    });
    $('#myTable2').DataTable({
        "language": {
            "processing":   "處理中...",
            "loadingRecords": "載入中...",
            "lengthMenu":   "顯示 _MENU_ 筆結果",
            "zeroRecords":  "沒有符合的結果",
            "info":         "顯示第 _START_ 至 _END_ 筆結果，共 _TOTAL_ 筆",
            "infoEmpty":    "顯示第 0 至 0 筆結果，共 0 筆",
            "infoFiltered": "(從 _MAX_ 筆結果中過濾)",
            "infoPostFix":  "",
            "search":       "搜尋:",
            "searchPlaceholder": "請輸入關鍵字",
            "paginate": {
                "first":    "第一頁",
                "previous": "上一頁",
                "next":     "下一頁",
                "last":     "最後一頁"
            },
            "aria": {
                "sortAscending":  ": 升冪排列",
                "sortDescending": ": 降冪排列"
            }
        },
        "pagingType": "full_numbers",
        "ordering": false
        // ,
        // "searching": false
    });
    $('#myTable3').DataTable({
        "language": {
            "processing":   "處理中...",
            "loadingRecords": "載入中...",
            "lengthMenu":   "顯示 _MENU_ 筆結果",
            "zeroRecords":  "沒有符合的結果",
            "info":         "顯示第 _START_ 至 _END_ 筆結果，共 _TOTAL_ 筆",
            "infoEmpty":    "顯示第 0 至 0 筆結果，共 0 筆",
            "infoFiltered": "(從 _MAX_ 筆結果中過濾)",
            "infoPostFix":  "",
            "search":       "搜尋:",
            "searchPlaceholder": "請輸入關鍵字",
            "paginate": {
                "first":    "第一頁",
                "previous": "上一頁",
                "next":     "下一頁",
                "last":     "最後一頁"
            },
            "aria": {
                "sortAscending":  ": 升冪排列",
                "sortDescending": ": 降冪排列"
            }
        },
        "pagingType": "full_numbers",
        "ordering": false
        // ,
        // "searching": false
    });
    $('#myTable4').DataTable({
        "language": {
            "processing": "處理中...",
            "loadingRecords": "載入中...",
            "lengthMenu": "顯示 _MENU_ 筆結果",
            "zeroRecords": "沒有符合的結果",
            "info": "顯示第 _START_ 至 _END_ 筆結果，共 _TOTAL_ 筆",
            "infoEmpty": "顯示第 0 至 0 筆結果，共 0 筆",
            "infoFiltered": "(從 _MAX_ 筆結果中過濾)",
            "infoPostFix": "",
            "search": "搜尋:",
            "searchPlaceholder": "請輸入關鍵字",
            "paginate": {
                "first": "第一頁",
                "previous": "上一頁",
                "next": "下一頁",
                "last": "最後一頁"
            },
            "aria": {
                "sortAscending": ": 升冪排列",
                "sortDescending": ": 降冪排列"
            }
        },
        "pagingType": "full_numbers",
        "ordering": false
        // ,
        // "searching": false
    });
    $('#myTable5').DataTable({
        "language": {
            "processing": "處理中...",
            "loadingRecords": "載入中...",
            "lengthMenu": "顯示 _MENU_ 筆結果",
            "zeroRecords": "沒有符合的結果",
            "info": "顯示第 _START_ 至 _END_ 筆結果，共 _TOTAL_ 筆",
            "infoEmpty": "顯示第 0 至 0 筆結果，共 0 筆",
            "infoFiltered": "(從 _MAX_ 筆結果中過濾)",
            "infoPostFix": "",
            "search": "搜尋:",
            "searchPlaceholder": "請輸入關鍵字",
            "paginate": {
                "first": "第一頁",
                "previous": "上一頁",
                "next": "下一頁",
                "last": "最後一頁"
            },
            "aria": {
                "sortAscending": ": 升冪排列",
                "sortDescending": ": 降冪排列"
            }
        },
        "pagingType": "full_numbers",
        "ordering": false
        // ,
        // "searching": false
    });
    $('#myTable6').DataTable({
        "language": {
            "processing": "處理中...",
            "loadingRecords": "載入中...",
            "lengthMenu": "顯示 _MENU_ 筆結果",
            "zeroRecords": "沒有符合的結果",
            "info": "顯示第 _START_ 至 _END_ 筆結果，共 _TOTAL_ 筆",
            "infoEmpty": "顯示第 0 至 0 筆結果，共 0 筆",
            "infoFiltered": "(從 _MAX_ 筆結果中過濾)",
            "infoPostFix": "",
            "search": "搜尋:",
            "searchPlaceholder": "請輸入關鍵字",
            "paginate": {
                "first": "第一頁",
                "previous": "上一頁",
                "next": "下一頁",
                "last": "最後一頁"
            },
            "aria": {
                "sortAscending": ": 升冪排列",
                "sortDescending": ": 降冪排列"
            }
        },
        "pagingType": "full_numbers",
        "ordering": false
        // ,
        // "searching": false
    });
    $('#myTable7').DataTable({
        "language": {
            "processing": "處理中...",
            "loadingRecords": "載入中...",
            "lengthMenu": "顯示 _MENU_ 筆結果",
            "zeroRecords": "沒有符合的結果",
            "info": "顯示第 _START_ 至 _END_ 筆結果，共 _TOTAL_ 筆",
            "infoEmpty": "顯示第 0 至 0 筆結果，共 0 筆",
            "infoFiltered": "(從 _MAX_ 筆結果中過濾)",
            "infoPostFix": "",
            "search": "搜尋:",
            "searchPlaceholder": "請輸入關鍵字",
            "paginate": {
                "first": "第一頁",
                "previous": "上一頁",
                "next": "下一頁",
                "last": "最後一頁"
            },
            "aria": {
                "sortAscending": ": 升冪排列",
                "sortDescending": ": 降冪排列"
            }
        },
        "pagingType": "full_numbers",
        "ordering": false
        // ,
        // "searching": false
    });


    // $('#myTable_filter label').on('focus', function () {
    //     this.setAttribute('id', 'tablefilter');
    // });
    // $('#myTable_filter label input').on('focus', function () {
    //     this.setAttribute('for', 'myTable_filter');
    // });

    $('#sendproposal').on('click', function() {
        var subject = document.proposalForm.title.value;
        var name = document.proposalForm.name.value;
        var email = document.proposalForm.email.value;
        var contents = document.proposalForm.content.value;
        var benefit = document.proposalForm.benefit.value;
        /*檢查是email格式是否正確*/
        var regularExpression = /^[^\s]+@[^\s]+\.[^\s]{2,3}$/;
        if (name.trim() == "") {
            document.getElementById('errorName').classList.add("active");
            document.proposalForm.name.focus();
            return false;
        } else if (email.trim() == "") {
            document.getElementById('errorEmail').classList.add("active");
            document.proposalForm.email.focus();
            return false;
        } else if (regularExpression.test(email) == false) {
            document.getElementById('errorEmail').classList.add("active");
            document.proposalForm.email.focus();
            return false;
        } else if (subject.trim() == "") {
            document.getElementById('errorTitle').classList.add("active");
            document.proposalForm.title.focus();
            return false;
        } else if (contents.trim() == "") {
            document.getElementById('errorContent').classList.add("active");
            document.proposalForm.content.focus();
            return false;
        } else if (benefit.trim() == "") {
            document.getElementById('errorBenefit').classList.add("active");
            document.proposalForm.benefit.focus();
            return false;
        } else {
            /*注意：表單中不要有input name是submit的會出問題*/
            statusinfo();
            document.proposalForm.submit();
        }
    });
    function statusinfo() {
        $('#statusinfo').modal('show');
    }

    //網路申請檔案閱覽抄錄複製服務申請表
    $('#backupApp').on('click', function () {
        var apply_name = document.addForm.apply_name.value;
        var apply_birth = document.addForm.apply_birth.value;
        var apply_id = document.addForm.apply_id.value;
        var apply_tel = document.addForm.apply_tel.value;
        var apply_add = document.addForm.apply_add.value;
        var agent_birth = document.addForm.agent_birth.value;
        var docno_1 = document.addForm.docno_1.value;
        var docname_1 = document.addForm.docname_1.value;
        var docitem_1 = document.addForm.docitem_1.value;
        var purpose_note = document.addForm.purpose_note.value;
        var qa_1 = document.addForm.qa_1.value;

        if (apply_name.trim() == "") {
            // alert("請填寫申請人姓名！");
            document.getElementById('errorApplyname').classList.add("active");
            document.addForm.apply_name.focus();
            return false;
        } else if (apply_birth.trim() == "") {
            alert("請填寫申請人出生年月日！");
            document.getElementById('errorApplyname').classList.add("active");
            document.addForm.apply_birth.focus();
            return false;
        } else if (apply_id.trim() == "") {
            alert("請填寫申請人統一編號！");
            document.getElementById('errorApplyname').classList.add("active");
            document.addForm.apply_id.focus();
            return false;
        } else if (apply_tel.trim() == "") {
            alert("請填寫申請人電話！");
            document.getElementById('errorApplyname').classList.add("active");
            document.addForm.apply_tel.focus();
            return false;
        } else if (apply_add.trim() == "") {
            alert("請填寫申請人住址！");
            document.getElementById('errorApplyname').classList.add("active");
            document.addForm.apply_add.focus();
            return false;
        } else if (docno_1.trim() == "") {
            alert("請填寫檔號或收發文字號 1！");
            document.getElementById('errorApplyname').classList.add("active");
            document.addForm.docno_1.focus();
            return false;
        } else if (docname_1.trim() == "") {
            alert("請填寫檔案名稱或內容要旨 1！");
            document.getElementById('errorApplyname').classList.add("active");
            document.addForm.docname_1.focus();
            return false;
        } else if (docitem_1.trim() == "") {
            alert("請選擇申請項目 1！");
            document.getElementById('errorApplyname').classList.add("active");
            document.addForm.docitem_1.focus();
            return false;
        } else if (!document.addForm.elements["purpose_1"].checked && !document.addForm.elements["purpose_2"].checked &&
            !document.addForm.elements["purpose_3"].checked && !document.addForm.elements["purpose_4"].checked &&
            !document.addForm.elements["purpose_5"].checked && !document.addForm.elements["purpose_6"].checked) {
            alert("請選擇申請目的！");
            return false;
        } else if (purpose_note == "" && document.addForm.elements["purpose_6"].checked) {
            alert("請敘明目的！");
            document.addForm.purpose_note.focus();
            return false;
        } else if (!document.addForm.elements["qa_11"].checked && !document.addForm.elements["qa_12"].checked &&
            !document.addForm.elements["qa_13"].checked && !document.addForm.elements["qa_14"].checked &&
            !document.addForm.elements["qa_15"].checked) {
            alert("請填寫問卷第一題！");
            return false;
        } else if (!document.addForm.elements["qa_21"].checked && !document.addForm.elements["qa_22"].checked &&
            !document.addForm.elements["qa_23"].checked && !document.addForm.elements["qa_24"].checked &&
            !document.addForm.elements["qa_25"].checked) {
            alert("請填寫問卷第二題！");
            return false;
        } else if (!document.addForm.elements["qa_31"].checked && !document.addForm.elements["qa_32"].checked &&
            !document.addForm.elements["qa_33"].checked && !document.addForm.elements["qa_34"].checked &&
            !document.addForm.elements["qa_35"].checked) {
            alert("請填寫問卷第三題！");
            return false;
        } else if (!document.addForm.elements["qa_41"].checked && !document.addForm.elements["qa_42"].checked &&
            !document.addForm.elements["qa_43"].checked && !document.addForm.elements["qa_44"].checked &&
            !document.addForm.elements["qa_45"].checked) {
            alert("請填寫問卷第四題！");
            return false;
        } else if (!document.addForm.elements["qa_51"].checked && !document.addForm.elements["qa_52"].checked &&
            !document.addForm.elements["qa_53"].checked && !document.addForm.elements["qa_54"].checked &&
            !document.addForm.elements["qa_55"].checked) {
            alert("請填寫問卷第五題！");
            return false;
        } else {
            /*注意：表單中不要有input name是submit的會出問題*/
            document.addForm.submit();
        }
    });

});

function validateSuggestForm() {
    var subject = document.suggestForm.title.value;
    var name = document.suggestForm.name.value;
    var email = document.suggestForm.email.value;
    var contents = document.suggestForm.content.value;
    /*檢查是email格式是否正確*/
    var regularExpression = /^[^\s]+@[^\s]+\.[^\s]{2,3}$/;
    if (subject.trim() == "") {
        document.getElementById('errorTitle').classList.add("active");
        document.suggestForm.title.focus();
        return false;
    } else if (name.trim() == "") {
        document.getElementById('errorName').classList.add("active");
        document.suggestForm.name.focus();
        return false;
    } else if (email.trim() == "") {
        document.getElementById('errorEmail').classList.add("active");
        document.suggestForm.email.focus();
        return false;
    } else if (regularExpression.test(email) == false) {
        document.getElementById('errorEmail').classList.add("active");
        document.suggestForm.email.focus();
        return false;
    } else if (contents.trim() == "") {
        document.getElementById('errorContent').classList.add("active");
        document.suggestForm.content.focus();
        return false;
    } else {
        /*注意：表單中不要有input name是submit的會出問題*/
        document.suggestForm.submit();
    }
}
/* 去掉字串兩端的空白字元 */
String.prototype.trim = function () {
    return this.replace(/(^\s+)|(\s+$)/g, "");
}

function hideError(formItem) {
    document.getElementById(formItem).classList.remove("active");
}
