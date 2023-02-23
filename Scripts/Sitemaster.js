MenuActivate();
function MenuActivate() {
    var menul1 = [];
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "Menu.aspx/GetMenu",
        dataType: "json",
        success: function (data) {
            $.map(data.d, function (item) {
                //alert(item.categoryName + " " + item.menuName + " " + item.subMenuName);
                if (item.categoryName == "HOME") {
                    if (item.URL == "") {
                        $('#menu2')
                            .append($('<li><a href="#" class="drop">' + item.menuName + '</a>')
                            );
                    }
                    else {
                        if ('<%=Context.User.IsInRole("user")%>' == 'True' && item.rights.toLowerCase().indexOf("all") != -1) {
                            alert('<%=Context.User.IsInRole("user")%>');
                        }
                        else if ('<%=Context.User.IsInRole("staff")%>' == 'True' && item.rights.toLowerCase().indexOf("staff") != -1) {
                            $('#menu2')
                                .append($('<li><a href="' + item.URL + '.aspx" class="drop">' + item.menuName + '</a>')
                                );
                        }
                        else if ('<%=Context.User.IsInRole("IT Centre")%>' == 'True') {
                            $('#menu2')
                                .append($('<li><a href="' + item.URL + '.aspx" class="drop">' + item.menuName + '</a>')
                                );
                        }
                    }

                }
                if (item.categoryName == "SCHEDULING") {
                    if (item.menuName == "IT Centre") {
                        $('#h3-title1')
                            .text(item.menuName
                            );
                        $('#menu3')
                            .append($('<li><a href="/Schedule.aspx?menu=itcentre&skin=2&p=' + item.classroomID + '"" class="drop">' + item.subMenuName + '</a>')

                            );
                    }
                    else if (item.menuName == "Meeting Room") {
                        $('#h3-title2')
                            .text(item.menuName
                            );
                        $('#menu4')
                            .append($('<li><a href="/Schedule.aspx?menu=meetingroom&skin=2&p=' + item.classroomID + '"" class="drop">' + item.subMenuName + '</a>')

                            );
                    }
                    else if (item.menuName == "Lecture Theatre") {
                        $('#h3-title3')
                            .text(item.menuName
                            );
                        $('#menu5')
                            .append($('<li><a href="/Schedule.aspx?menu=lecturetheatre&skin=2&p=' + item.classroomID + '"" class="drop">' + item.subMenuName + '</a>')

                            );
                    }
                    else if (item.menuName == "Seminar Room") {
                        $('#h3-title4')
                            .text(item.menuName
                            );
                        $('#menu6')
                            .append($('<li><a href="/Schedule.aspx?menu=seminarroom&skin=2&p=' + item.classroomID + '"" class="drop">' + item.subMenuName + '</a>')

                            );
                    }
                    else if (item.menuName == "Sport Court") {
                        $('#h3-title5')
                            .text(item.menuName
                            );
                        $('#menu7')
                            .append($('<li><a href="/Schedule.aspx?menu=' + item.menuName + '&skin=2&p=' + item.classroomID + '"" class="drop">' + item.subMenuName + '</a>')

                            );
                    }
                    else if (item.menuName == "Transport") {
                        $('#h3-title6')
                            .text(item.menuName
                            );
                        $('#menu8')
                            .append($('<li><a href="/Schedule.aspx?menu=transport&skin=2&p=' + item.classroomID + '"" class="drop">' + item.subMenuName + '</a>')

                            );
                    }
                    else if (item.menuName == "Eng Lab") {
                        $('#h3-title7')
                            .text(item.menuName
                            );
                        $('#menu9')
                            .append($('<li><a href="/Schedule.aspx?menu=englab&skin=2&p=' + item.classroomID + '"" class="drop">' + item.subMenuName + '</a>')

                            );
                    }
                    else if (item.menuName == "Level 5") {
                        $('#h3-title8')
                            .text(item.menuName
                            );
                        $('#menu10')
                            .append($('<li><a href="/Schedule.aspx?menu=englab&skin=2&p=' + item.classroomID + '"" class="drop">' + item.subMenuName + '</a>')

                            );
                    }
                }
                if (item.categoryName == "INVENTORY") {
                    if (item.URL == "") {
                        $('#menu_Inventory')
                            .append($('<li><a href="#" class="drop">' + item.menuName + '</a>')
                            );
                    }
                    else {
                        if ('<%=Context.User.IsInRole("user")%>' == 'True' && item.rights.toLowerCase().indexOf("all") != -1) {
                            alert('<%=Context.User.IsInRole("user")%>');
                        }
                        else if ('<%=Context.User.IsInRole("staff")%>' == 'True' && item.rights.toLowerCase().indexOf("staff") != -1) {
                            $('#menu_Inventory')
                                .append($('<li><a href="' + item.URL + '.aspx" class="drop">' + item.menuName + '</a>')
                                );
                        }
                        else if ('<%=Context.User.IsInRole("IT Centre")%>' == 'True') {
                            $('#menu_Inventory')
                                .append($('<li><a href="' + item.URL + '.aspx" class="drop">' + item.menuName + '</a>')
                                );
                        }
                    }
                }


            });

        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }

    });


}