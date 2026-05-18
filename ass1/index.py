# print "content-type: text/html"
# print ''

# for i in range(5):
#     print "Name : Sunandha<br>"
#     print "Roll No. : 12345<br>"
#     print "Department : IT<br><br>"

# ---------------------------------------------------------

# a = 10
# b = 5

# print "<pre>"

# print "First Number =", a
# print "Second Number =", b
# print ""

# print "Addition =", a + b
# print "Subtraction =", a - b
# print "Multiplication =", a * b
# print "Division =", a / b

# print "</pre>"

# --------------------------------------------------------------------

# print "<pre>"

# for i in range(1,11):
#     print "10 x ", i, " = ", 10 * i

# print "</pre>"

# ----------------------------------------------------------------------

# a = 0
# b = 1

# print "<pre>"
# print "Fibonacci Series:"
# print ""

# for i in range(10):
#     print a
#     c = a + b
#     a = b
#     b = c

# print "</pre>"

# -------------------------------------------------------------------------

# import cgi

# form = cgi.FieldStorage()

# a = form.getvalue('num1')
# b = form.getvalue('num2')
# c = form.getvalue('num3')

# if a and b and c:
#     a = int(a)
#     b = int(b)
#     c = int(c)

#     if a>b and a>c:
#         largest = a
#     elif b>c:
#         largest = b
#     else:
#         largest = c

#     print "<pre>"
#     print "largest = ", largest
#     print "</pre>"

# else:

#     print """
#     <form method="post">
#     Enter First Number:
#     <input type="text" name="num1"><br><br>

#     Enter Second Number:
#     <input type="text" name="num2"><br><br>

#     Enter Third Number:
#     <input type="text" name="num3"><br><br>

#     <input type="submit" value="Find Largest">

#     </form>
#     """

# -------------------------------------------------------------------

# import cgi

# form = cgi.FieldStorage()

# a = form.getvalue('num1')
# b = form.getvalue('num2')

# if a and b:
#     a = int(a)
#     b = int(b)

#     print "a = ", a
#     print "b = ", b

#     print "<pre>"
#     print "Addition =", a + b
#     print "Subtraction =", a - b
#     print "Multiplication =", a * b
#     print "Division =", a / b
#     print "</pre>"

# else:
#     print """
#     <form method="post">

#     Enter First Number:
#     <input type="text" name="num1">

#     Enter Second Number:
#     <input type="text" name="num2">

#     <input type="submit" value="Calculate">

#     </form>
#     """