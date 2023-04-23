import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class calculator extends JFrame implements ActionListener {

    private JPanel panel;
    private JTextField display;
    private JButton[] buttons;
    private String[] buttonLabels = {
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "=", "+"
    };
    private double num1 = 0.0, num2 = 0.0, result = 0.0;
    private char operator;

    public calculator() {
        setTitle("Calculator");
        setResizable(false);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        panel = new JPanel(new GridLayout(4, 4));
        display = new JTextField(10);
        display.setEditable(false);

        buttons = new JButton[buttonLabels.length];

        for (int i = 0; i < buttonLabels.length; i++) {
            buttons[i] = new JButton(buttonLabels[i]);
            buttons[i].addActionListener(this);
            panel.add(buttons[i]);
        }

        add(display, BorderLayout.NORTH);
        add(panel, BorderLayout.CENTER);
        pack();
    }

    public void actionPerformed(ActionEvent e) {
        String input = e.getActionCommand();

        if (input.charAt(0) >= '0' && input.charAt(0) <= '9' || input.equals(".")) {
            display.setText(display.getText() + input);
        } else {
            char op = input.charAt(0);

            switch (op) {
                case '+':
                case '-':
                case '*':
                case '/':
                    num1 = Double.parseDouble(display.getText());
                    operator = op;
                    display.setText("");
                    break;
                case '=':
                    num2 = Double.parseDouble(display.getText());

                    switch (operator) {
                        case '+':
                            result = num1 + num2;
                            break;
                        case '-':
                            result = num1 - num2;
                            break;
                        case '*':
                            result = num1 * num2;
                            break;
                        case '/':
                            result = num1 / num2;
                            break;
                    }

                    display.setText("" + result);
                    break;
                default:
                    display.setText("Error");
                    break;
            }
        }
    }

    public static void main(String[] args) {
        calculator calculator = new calculator();
        calculator.setVisible(true);
    }
}
