import javax.swing.*;
import java.awt.*;

public class gui {
    public static void main(String[] args){
        JFrame frame = new JFrame();
        frame.setTitle("Gui");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(420, 420);
        frame.setVisible(true);
        frame.getContentPane().setBackground(new Color(242, 240, 184));
    }
}
